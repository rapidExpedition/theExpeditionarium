function addUrl(url, title, active) {
    var leaf = {};
    url.split('/')
        .filter(function(e) { return e })
        .reduce(function(p, c) { leaf = p[c] || (p[c] = {}); return leaf; }, this);
    leaf.__url__ = url;
    leaf.__title__ = title;
    leaf.__active__ = active;
    return this;
}

printSidebar.depth = 0;
printSidebar.html = '';
function printSidebar(tree, indentation) {
    for (var key in tree) {
        if (tree[key].__url__ == undefined) {
            if (typeof tree[key] != 'object')
                continue;
            printSidebar.html +=
                '<div class="sidebar-nav-item" style="cursor: pointer">'
                + repeatString(indentation, printSidebar.depth) + key
                + '</div>\n';
        } else {
            if (tree[key].__active__) {
                printSidebar.html += '<a class="sidebar-nav-item active" href="'
                    + tree[key].__url__ + '">'
                    + repeatString(indentation, printSidebar.depth)
                    + tree[key].__title__
                    + '</a>\n';
            } else {
                printSidebar.html += '<a class="sidebar-nav-item" href="'
                    + tree[key].__url__ + '">'
                    + repeatString(indentation, printSidebar.depth)
                    + tree[key].__title__
                    + '</a>\n';
            }
        }
        ++printSidebar.depth;
        printSidebar(tree[key], indentation);
        --printSidebar.depth;
    }

    if (printSidebar.depth == 0) {
        var html = printSidebar.html;
        printSidebar.html = '';
        return html;
    }
}

function repeatString(string, size) {
    return Array(size + 1).join(string);
}

function goToProse(repo, page) {
    window.location = repo.replace(/^https?:\/\/[^\/]*\//i,'http://prose.io/#') + '/edit/master/' + page;
}

function goToGitHub(repo, page) {
    window.location = repo + '/edit/master/' + page;
}

function goToWiki(repo, page) {
    window.location = repo + '/wiki' + page + '/_edit';
}

// DONE: figure out how establish a conditional in which goToGitHub and goToProse direct to the appropriate wiki repo for transcluded articles instead of the page *stubs* in theExpeditionarium repo +wikiTransclusion +enhancement id:29 gh:10
// TODO: experiment with using the same technique applied in #10 in other sections of the site like wayPoint, for instance +wikiTransclusion +enhancement id:30 gh:11
// TODO: Pagination: http://developer.github.com/guides/traversing-with-pagination id:0
// TODO: OAuth or Caching/Cookies? http://developer.github.com/v3/oauth/ id:1
// TODO: Make order more random? id:3
