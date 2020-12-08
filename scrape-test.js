// scraper.js
const delay = require('delay');
const { default: PQueue } = require('p-queue');


const queue = new PQueue({ concurrency: 1 });

const debug = require('debug');
const LogInTab1 = debug('tab1');
const LogInTab2 = debug('tab2');

async function navigate() {
    LogInTab1('navigating to hacker news');
    await delay(2000);
}

let linkNumber = 0;

async function collectData() {
    LogInTab1('-------------------');
    LogInTab1('collecting all data');
    await delay(2000);
    const commentLinks = [];
    for (let i = 0; i < 10; i++) {
        commentLinks.push(`link${linkNumber}`);
        linkNumber++;
    }

    LogInTab1('add all links to the queue');
    addToIndividualQueue(commentLinks);
}

async function collectIndividualData(link) {
    LogInTab2(`going to ${link}`);
    await delay(1000);
}

let totalLinks = [];

async function addToIndividualQueue(links) {
    totalLinks.push(...links);
    LogInTab2(`Total links to visit ${totalLinks.length}`);
    for (let link of links) {
        queue.add(() => collectIndividualData(link));
    }
}

let currentPage = 1;
async function paginate(maxTries = 0) {
    try {
        LogInTab1('going to next page');
        ++currentPage;
        await delay(2000);
        return true
    } catch (e) {
        if (maxTries < 3) {
            await paginate(++maxTries)
        }
    }
}

async function loop() {
    LogInTab1(`currently in page ${currentPage}`);
    await collectData();
    if (currentPage < 5 && nextButtonExist) {
        const shouldContinue = await paginate();
        if (shouldContinue) await loop();
    }
}

async function scrape() {
    await navigate();
    await loop();
    // wait for queue to finish
    await queue.onEmpty();
    await queue.onIdle();
    LogInTab1(`closing the browser`);
}

scrape();