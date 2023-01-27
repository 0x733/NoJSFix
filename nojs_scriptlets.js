/// lazy-src.js
(function () {
    window.addEventListener("load", function () {
        for (const imgEl of document.querySelectorAll("img[data-lazy-src]")) {
            imgEl.src = imgEl.dataset.lazySrc;
        }
    });
})();


/// srcset.js
(function () {
    const target = "{{1}}";
    const replace = "{{2}}";
    const mode = "{{3}}";
    console.log(mode);
    window.addEventListener("load", function () {
        for (const imgEl of document.querySelectorAll(target)) {
            if (mode === "" || mode === "{{3}}") {
                imgEl.src = imgEl.dataset[replace]
            }
            else {
                let imgSplit = imgEl.dataset[replace].split(",");
                imgEl.src = imgSplit[imgSplit.length - 1].trim().split(" ")[0];
            }
        }
    });
})();


/// loading-lazy.js
(function () {
    window.addEventListener("load", function () {
        const selectorStr = '.right_container_flip img[loading="lazy"], #article_box img[loading="lazy"]';

        for (let imgEl of document.querySelectorAll(selectorStr)) {
            let imgSplit = imgEl.previousElementSibling.dataset.srcset.split(",");
            imgEl.src = imgSplit[imgSplit.length - 1].trim().split(" ")[0];
        }
    });
})();


/// picture-source.js
(function () {
    window.addEventListener("load", function () {
        for (let srcEl of document.querySelectorAll("picture > source")) {
            srcEl.srcset = srcEl.srcset.split("?")[0];
        }
    });
})();


/// vanilla-gallery.js
(function () {
    window.addEventListener("load", function () {
        let scriptEl = document.querySelector('script[id^="vanilla-slice-imageGallery"]');
        let imgEl = document.querySelector("#article-body img.image-wrapped__image");

        let dictStr = scriptEl.innerHTML.split("var data = ")[1].split(";\n")[0];
        imgEl.src = JSON.parse(dictStr).galleryData[0].image.src;
    });
})();