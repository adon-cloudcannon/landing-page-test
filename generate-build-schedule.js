const fs = require("fs");
const path = require("path");
const grayMatter = require("gray-matter");

const postDirectory = "collections/posts"
const pathToPosts = path.join("./src", postDirectory);
const postFileNames = fs.readdirSync(pathToPosts);

const linesToWrite = [];

console.log("🕦 Generating build schedule...")
const getPostData = (fileContents) => {
  const parsed = grayMatter(fileContents);
  let date = parsed.data.date;
  if(!date || parsed.data.draft) {
    return null;
  }
  if(typeof date === "string") {
    date = new Date(date);
  }

  const title = parsed.data.title;
  const now = Date.now();
  const parsedDate = Date.parse(date);

  return {
    title,
    isFuture: now < parsedDate,
    dateString: date.toISOString()
  }
}

postFileNames.forEach((postFileName) => {
  try {
    const fullPath = path.join(pathToPosts, postFileName);
    const contents = fs.readFileSync(fullPath, {encoding: "utf-8"});
    const postData = getPostData(contents);

    if(postData?.isFuture){
      linesToWrite.push(`${postData.dateString},Build Post,${path.join(postDirectory, postFileName)}`)
    }
  } catch (error) {
  }
});

if(linesToWrite.length > 0) {
  const stringToWrite = "---\npermalink: _schedule.txt\n---\n" + linesToWrite.join("\n");
  fs.writeFileSync("./src/_schedule.html", stringToWrite);
  console.log(`🕦 Scheduled builds for ${linesToWrite.length} post${linesToWrite.length !== 1 ? 's' : ''}`);
} else {
  console.log("🕦 No future posts found");
};


