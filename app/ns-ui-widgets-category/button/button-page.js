const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/button/basics/basics-page"),
    new link("Styling", "ns-ui-widgets-category/button/styling/styling-page"),
    new link("Code-Behind", "ns-ui-widgets-category/button/code-behind/code-behind-page")
];

const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/button/basics/basics-ts-page"),
    new link("Code-Behind", "ns-ui-widgets-category/button/code-behind/code-behind-ts-page")
];

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
