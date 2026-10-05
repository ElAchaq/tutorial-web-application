class Image {

    constructor(url, name) {
        this.url = url;
        this.name = name;
    }

}

class Category {

    constructor(name, image) {

        this.name = name;
        this.image = image;

        // 0..* Tutorials
        this.tutorials = [];

    }

}

class Chapter {

    constructor(name, description, duration) {

        this.name = name;
        this.description = description;
        this.duration = duration;

        this.tutorial = null;

    }

}

class Tutorial {

    constructor(
        name,
        language,
        description,
        duration,
        date,
        url,
        embedCode,
        image
    ) {

        this.name = name;
        this.language = language;
        this.description = description;
        this.duration = duration;
        this.date = date;

        this.url = url;
        this.embedCode = embedCode;

        this.image = image;

        this.categories = [];
        this.chapters = [];

    }

    addCategory(cat) {

        this.categories.push(cat);

        // maintain both sides of the many-to-many relationship
        cat.tutorials.push(this);

    }

    addChapter(ch) {

        this.chapters.push(ch);

        // each chapter belongs to this tutorial
        ch.tutorial = this;

    }

}
function getDurationInHoursAndMinutes(duration){

    const parts = duration.split(":");

    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    return `${hours} hr ${minutes} min`;
}

const webImage =
new Image(
    "assets/img/ex.jpeg",
    "Web Development Image"
);

const javaImage =
new Image(
    "assets/img/ex.jpeg",
    "Java Image"
);

const webCategory =
new Category(
    "Web Development",
    webImage
);

const javaCategory =
new Category(
    "Java",
    javaImage
);


const nodeTutorial =
new Tutorial(

    "Node.js Quick Start",

    "EN",

    "Introduction to Node.js.",

    "01:05",

    new Date("2012-09-28"),

    "https://nodejs.org",

    '<iframe src="https://www.youtube.com/embed/yS6QKQkfw_w"></iframe>',

    new Image(
        "assets/img/node.png",
        "Node.js Image"
    )

);

const c1 =
new Chapter(

"Introduction",

"Opening remarks",

"00:10"

);

const c2 =
new Chapter(

"Hello World",

"First Node.js program",

"00:20"

);

const c3 =
new Chapter(

"Modules",

"Using modules",

"00:35"

);


nodeTutorial.addCategory(webCategory);

nodeTutorial.addChapter(c1);

nodeTutorial.addChapter(c2);

nodeTutorial.addChapter(c3);