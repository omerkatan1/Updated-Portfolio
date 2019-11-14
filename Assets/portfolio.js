

let portfolioArrayImg = ["Assets/Images/IMG_0204.jpg"];
let portfolioArrayLink = ["https://omerkatan1.github.io/project-1/"];
let portfolioArrayName = ["RouteMapper"];

for (var i = 0; i < portfolioArrayLink.length; i++) {
    const portfolioBox = $("<div>");
    portfolioBox.attr("id", "portfolioImg");
    portfolioBox.addClass("col-xl-5 col-lg-6 col-md-6 col-sm-12");

    const link = $("<a>");
    const img = $("<img>");
    link.attr("href", portfolioArrayLink[i]);
    link.attr("target", "_blank");
    img.addClass("imgResize");
    img.attr("src", portfolioArrayImg[i]);

    link.append(img);
    portfolioBox.append(link);

    $("#portfolioHolder").append(portfolioBox);
    
}

