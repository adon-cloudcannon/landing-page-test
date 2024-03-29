---
draft: false
title: Deploy Jekyll sites anywhere using jekyll-hook
date: 2016-01-26T15:22:00+1300
author: a5f00346-90df-4d69-9ce1-d9e4c8e51b10
tags:
  - Jekyll
cta:
  title: Launch your website today
  body_text: Give your content team full autonomy on your developer-approved tech stack with CloudCannon.
  button:
    content: 
      link: "https://app.cloudcannon.com/register?trial=cc_standard"
      text: "Get started free!"
    styles:
      size:
      style: "outline"
      extra_classes:
seo:
  open_graph_type: article
  featured_image:
  featured_image_alt:
image: https://cc-dam.imgix.net/blog/uploads/anchor.jpg
ssg_frameworks:
  - jekyll
categories:
---
In the last tutorial, we used [Travis CI](https://travis-ci.org) to deploy a Jekyll site to Amazon S3. This tutorial covers using [jekyll-hook](https://github.com/developmentseed/jekyll-hook) to automatically deploy changes from GitHub/CloudCannon to your own server.

### What is jekyll-hook?

[jekyll-hook](https://github.com/developmentseed/jekyll-hook) is a Node.js program which runs on a server. It listens for new commits on a GitHub repository using [webhooks](https://developer.github.com/webhooks/). When there is a commit, jekyll-hook pulls the latest source code, builds the site with Jekyll, then deploys the built site to a directory.

### Setup

I'm using Ubuntu 14.04 so adjust the instructions for your operating system.

Install Git, Node.js, Ruby and Jekyll:

```sh

$ sudo apt-get update

$ sudo apt-get install git nodejs ruby ruby1.9.1-dev npm

$ sudo gem install jekyll -v 2.4.0
```

Symlink `nodejs` to `node`\:

```sh

$ sudo ln -s /usr/bin/nodejs /usr/bin/node
```

Clone the jekyll-hook repo from GitHub:

```sh

$ git clone https://github.com/developmentseed/jekyll-hook.git
```

Install the dependencies:

```sh

$ cd jekyll-hook

$ npm install
```

### Configuration

Copy the sample configuration to `config.json`\:

```sh

$ cp config.sample.json config.json
```

Open `config.json` in a text editor.

With this script you can configure jekyll-hook to listen to a particular server, run special build scripts for a particular Git branch or send an email every time there's a build. The default `config.json` get us most of the way there, we just need to ensure changes can be pulled in from our account.

Change `accounts` to your GitHub account or organisation.

```sh

$ nano config.json
```

Here's my complete `config.json`\:

```javascript

{

"gh_server": "github.com",

"temp": "/home/ubuntu/jekyll-hook",

"public_repo": true,

"scripts": {

"#default": {

"build": "./scripts/build.sh",

"publish": "./scripts/publish.sh"

}

},

"secret": "",

"email": {

"isActivated": false,

"user": "",

"password": "",

"host": "",

"ssl": true

},

"accounts": [

"cloudcannon",

"mneumegen"

]

}
```

As you can see from the configuration, jekyll-hook is going to run `./scripts/build.sh` when it detects a change. The default build script pulls the latest commits to the local repository and runs `jekyll build`. We don't need to change anything in this file.

Here's my `./scripts/build.sh`\:

```sh

#!/bin/bash

set -e

# This script is meant to be run automatically

# as part of the jekyll-hook application.

# https://github.com/developmentseed/jekyll-hook

repo=$1

branch=$2

owner=$3

giturl=$4

source=$5

build=$6

# Check to see if repo exists. If not, git clone it

if [ ! -d $source ]; then

git clone $giturl $source

fi

# Git checkout appropriate branch, pull latest code

cd $source

git checkout $branch

git pull origin $branch

cd -

# Run jekyll

cd $source

jekyll build -s $source -d $build

cd -
```

After the build finishes, jekyll-hook, runs `./scripts/publish.sh`. This script moves the built site to your web server directory.

By default jekyll-hook deploys the site to `/usr/share/nginx/html/$repo`. `$repo` is one of the variables jekyll-hook makes available to use in the path. You can also use `$branch`, `$owner`, `$giturl`, `$source` and `$build`.

Change `site` to your desired location.

```javascript

$ nano scripts/publish.sh
```

Here's my complete `scripts/publish.sh`\:

```javascript

#!/bin/bash

set -e

# This script is meant to be run automatically

# as part of the jekyll-hook application.

# https://github.com/developmentseed/jekyll-hook

repo=$1

branch=$2

owner=$3

giturl=$4

source=$5

build=$6

# Set the path of the hosted site

site="/home/ubuntu/$repo"

# Remove old site files, move new ones in place

# On amazon EC2 use sudo if nginx html forlder has root ownership

rm -rf $site
```

Jekyll-hook is set up to listen for changes from GitHub. When there is a change it will build the site and deploy it to a folder.

### Webhook

Now we need GitHub to send jekyll-hook a webhook when there's a commit to the repository.

Open your repository on GitHub. Then go to Settings -&gt; Webhooks & services.

\!\[GitHub webhooks](https://cc-dam.imgix.net/blog/images/blog/jekyll-hook/github.png)\

Click Add webhook. Set the Payload URL to point at your jekyll-hook server `http://example.org:8080/hooks/jekyll/:branch` where `:branch` is the branch you want to publish. The rest of the defaults are fine, press Add webhook.

\!\[GitHub webhook](https://cc-dam.imgix.net/blog/images/blog/jekyll-hook/github-webhook.png)\

### Deploying the site

Run jekyll-hook. It listens for changes on port 8080:

```sh

$ ./jekyll-hook.js
```

If you're running this on EC2 remember you'll need to open port 8080 in your security group.

Make a change in the repository and you'll see logs appear in your jekyll-hook program. If nothing happens have a look at your webhook logs on GitHub.

Check the deployment directory to see a built version of your Jekyll site. Now you just need to configure your webserver to serve the site.
