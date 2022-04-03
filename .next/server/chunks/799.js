exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 3225:
/***/ ((module) => {

// Exports
module.exports = {
	"ZoomedWrapper": "ZoomedImage_ZoomedWrapper__MLfN_",
	"ZoomedImage": "ZoomedImage_ZoomedImage__ESo8H"
};


/***/ }),

/***/ 3068:
/***/ ((module) => {

// Exports
module.exports = {
	"ImageContainer": "ImageContainer_ImageContainer__GKxQZ",
	"Vertical": "ImageContainer_Vertical__NaD6Z",
	"Horiz": "ImageContainer_Horiz__yhgCM"
};


/***/ }),

/***/ 6526:
/***/ ((module) => {

// Exports
module.exports = {
	"Work": "Work_Work__cXg7s",
	"Desc": "Work_Desc__Tj0Il",
	"DescSec": "Work_DescSec__rLdqd",
	"Colors": "Work_Colors__iw7da"
};


/***/ }),

/***/ 9023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_Work)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/ui/Modal.js
var Modal = __webpack_require__(1089);
// EXTERNAL MODULE: ./src/components/works/ZoomedImage.module.css
var ZoomedImage_module = __webpack_require__(3225);
var ZoomedImage_module_default = /*#__PURE__*/__webpack_require__.n(ZoomedImage_module);
;// CONCATENATED MODULE: ./src/components/works/ZoomedImage.js



const ZoomedImage = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
        className: (ZoomedImage_module_default()).ZoomedWrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: props.src,
            alt: "",
            className: (ZoomedImage_module_default()).ZoomedImage
        })
    }));
};
/* harmony default export */ const works_ZoomedImage = (ZoomedImage);

// EXTERNAL MODULE: ./src/components/works/ImageContainer.module.scss
var ImageContainer_module = __webpack_require__(3068);
var ImageContainer_module_default = /*#__PURE__*/__webpack_require__.n(ImageContainer_module);
;// CONCATENATED MODULE: ./src/components/works/ImageContainer.js




const ImageContainer = (props)=>{
    const { photos , ...containerProps } = props;
    const { 0: zoomedSrc , 1: setZoomedSrc  } = (0,external_react_.useState)(null);
    const zoomClickHandler = (e)=>{
        e.stopPropagation();
        const src = e.target.getAttribute("src");
        if (zoomedSrc == src) setZoomedSrc(null);
    };
    const zoomFocusHandler = (e)=>{
        const src = e.target.getAttribute("src");
        if (zoomedSrc == src) setZoomedSrc(null);
        setZoomedSrc(src);
    };
    const zoomBlurHandler = (e)=>{
        const src = e.target.getAttribute("src");
        console.log(src);
        if (zoomedSrc == src) {
            setZoomedSrc(null);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ImageContainer_module_default()).ImageContainer,
                style: props.style || {
                },
                children: photos.map((photo, index)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `
              ${photo.isVertical ? (ImageContainer_module_default()).Vertical : (ImageContainer_module_default()).Horiz}
            `,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            tabIndex: 1,
                            onClick: zoomClickHandler,
                            onFocus: zoomFocusHandler,
                            onBlur: zoomBlurHandler,
                            src: photo.src
                        })
                    }, index + Math.random()));
                })
            }),
            zoomedSrc && /*#__PURE__*/ jsx_runtime_.jsx(works_ZoomedImage, {
                src: zoomedSrc
            }, Math.random())
        ]
    }));
};
/* harmony default export */ const works_ImageContainer = (ImageContainer);

// EXTERNAL MODULE: ./src/components/ui/MainButton.js
var MainButton = __webpack_require__(834);
// EXTERNAL MODULE: ./src/components/ui/Secondary.js
var Secondary = __webpack_require__(2276);
// EXTERNAL MODULE: ./src/components/ui/Section.js
var Section = __webpack_require__(4568);
// EXTERNAL MODULE: ./src/components/works/Work.module.scss
var Work_module = __webpack_require__(6526);
var Work_module_default = /*#__PURE__*/__webpack_require__.n(Work_module);
;// CONCATENATED MODULE: ./src/components/works/Work.js







const Work = (props)=>{
    const { photos , colors , query , description , name , style , deskStyle , imgContainerStyle ,  } = props;
    const router = (0,router_.useRouter)();
    const searchParams = new URLSearchParams(query);
    const orderHandler = (e)=>{
        router.push(`/order?${searchParams}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        element: "figure",
        isHorizontal: true,
        className: (Work_module_default()).Work,
        style: style || {
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(works_ImageContainer, {
                style: imgContainerStyle,
                photos: photos
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Work_module_default()).Desc,
                style: deskStyle || {
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
                        className: (Work_module_default()).DescSec,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Secondary/* default */.Z, {
                                children: name
                            }),
                            description.map((descrip)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: descrip
                                }, Math.random()));
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Work_module_default()).DescSec,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Work_module_default()).Colors,
                                children: colors.map((color)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            background: color
                                        }
                                    }, Math.random()));
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MainButton/* default */.Z, {
                                onClick: orderHandler,
                                className: (Work_module_default()).OrderButton,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Заказать"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const works_Work = (Work);


/***/ }),

/***/ 1963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ firstWorks),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parentFolder = "/works-assets/";
// QUARTZ KITCHEN
const quartzKitchenFront = "quartz/front.jpeg";
const quartzKitchenSide = "quartz/side.jpeg";
// TIMBER CLOSET
const timberClosetClosed = "timber/closed.jpg";
const timberClosetOpen = "timber/open.jpg";
// BED AND DESK
const bed = "bed, desk, shelf/bed.jpeg";
const desk = "bed, desk, shelf/desk.jpeg";
// RED KITCHEN
const redKitchenLeft = "kitchen_2/left.jpeg";
const redKitchenRight = "kitchen_2/right.jpeg";
// LESS LIME KITCHEN
const lessLimeKitchenLeft = "less lime kitchen/left.jpeg";
const lessLimeKitchenRight = "less lime kitchen/right.jpeg";
// FUTURE KITCHEN
const futureKitchenTop = "kitchen details/top.jpg";
const futureKitchenBottom = "kitchen details/bottom.jpg";
// LATTE KITCHEN
const latteKitchenMain = "latte/main.jpeg";
const latteKitchenAngle = "latte/angle.jpeg";
const latteKitchenFar = "latte/far.jpeg";
// LINEAR_2 KITCHEN
const linear2KitchenMain = "linear_2/main.jpeg";
const linear2KitchenLilFar = "linear_2/lilfar.jpeg";
const linear2KitchenFar = "linear_2/far.jpeg";
// MODERN KITCHEN
const modernKitchenMain = "modern/main.jpeg";
const modernKitchenFront = "modern/front.jpeg";
const modernKitchenLong = "modern/long.jpeg";
// NORWAY KITCHEN
const norwayKitchenMain = "norway/main.jpeg";
const norwayKitchenLight = "norway/light.jpeg";
const norwayKitchenAngle = "norway/angle.jpeg";
// SAFARI KITCHEN
const safariKitchenAngle = "safari/angle.jpeg";
const safariKitchenMain = "safari/main.jpeg";
const safariKitchenFar = "safari/far.jpeg";
// SOLID KITCHEN
const solidKitchenAngleMain = "solid/angle_main.jpeg";
const solidKitchenAngle2 = "solid/angle2.jpeg";
const solidKitchenMain = "solid/main.jpeg";
const firstWorks = [
    {
        id: Math.random(),
        photos: [
            {
                src: latteKitchenMain
            },
            {
                src: latteKitchenAngle,
                isVertical: true
            },
            {
                src: latteKitchenFar,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Латте"',
        description: [
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка"
        ],
        colors: [
            "#cdcbcc",
            "#7d665e"
        ],
        query: {
            type: "kitchen",
            shape: "straight",
            material: "ldsp+mdf"
        }
    },
    {
        // SOLID
        id: Math.random(),
        photos: [
            {
                src: solidKitchenAngleMain
            },
            {
                src: solidKitchenAngle2,
                isVertical: true
            },
            {
                src: solidKitchenMain,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Солид"',
        description: [
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка"
        ],
        colors: [
            "#746d71",
            "repeating-linear-gradient(90deg, #733617, #965632 3px)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    }, 
];
const works = [
    ...firstWorks,
    {
        // FUTURISTIC
        id: Math.random(),
        photos: [
            {
                src: futureKitchenTop
            },
            {
                src: futureKitchenBottom
            }, 
        ],
        name: 'Кухня "Футуристик"',
        description: [
            "Корпус: ЛДСП Egger",
            "Фасад: МДФ",
            "Фурнитура: Hettich"
        ],
        colors: [
            "#b8b19f",
            "#353444"
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        },
        imgContainerStyle: {
            height: "65%"
        }
    },
    {
        id: Math.random(),
        photos: [
            {
                src: redKitchenLeft,
                isVertical: true
            },
            {
                src: redKitchenRight,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Брусника"',
        description: [
            "Корпус: ЛДСП",
            "Фасад: МДФ Плёнка"
        ],
        colors: [
            "#fcfaee",
            "linear-gradient(45deg, #bb2725 30%, #c26267 50%, #bb2725 65%)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "ldsp+lsdp+mdf"
        }
    },
    {
        // MODERN
        id: Math.random(),
        photos: [
            {
                src: modernKitchenMain
            },
            {
                src: modernKitchenFront,
                isVertical: true
            },
            {
                src: modernKitchenLong
            }, 
        ],
        name: 'Кухня "Модерн"',
        description: [
            "Корпус: ЛДСП Lamarty",
            "Фасад: Mattelux Super",
            "Фурнитура: Hettich", 
        ],
        colors: [
            "#747675",
            "#c4baa4",
            "#644028"
        ],
        query: {
            type: "kitchen",
            shape: "island",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        },
        imgContainerStyle: {
            height: "60%"
        }
    },
    {
        id: Math.random(),
        photos: [
            {
                src: norwayKitchenMain
            },
            {
                src: norwayKitchenAngle
            },
            {
                src: norwayKitchenLight
            }, 
        ],
        name: 'Кухня "Норвегия"',
        description: [
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка"
        ],
        colors: [
            "#b8bab9",
            "#41454e",
            "repeating-linear-gradient(90deg, #a37452, #894f20 3px)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        },
        style: {
            height: "350px"
        }
    },
    {
        // EXPLIT
        id: Math.random(),
        photos: [
            {
                src: linear2KitchenMain
            },
            {
                src: linear2KitchenLilFar,
                isVertical: true
            },
            {
                src: linear2KitchenFar,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Эксплит"',
        description: [
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ Плёнка"
        ],
        colors: [
            "#c6bbb7",
            "#141614"
        ],
        query: {
            type: "kitchen",
            shape: "straight",
            material: "lsdp+mdf"
        }
    },
    {
        // SAFARI
        id: Math.random(),
        photos: [
            {
                src: safariKitchenAngle
            },
            {
                src: safariKitchenMain,
                isVertical: true
            },
            {
                src: safariKitchenFar,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Сафари"',
        description: [
            "Корпус: ЛДСП Влагостойкий",
            "Фасад: МДФ"
        ],
        colors: [
            "repeating-linear-gradient(90deg, #b18a3b, #a37931 3px )",
            "#c2d5db",
            "#0b151f", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    },
    {
        // QUARTZ
        id: Math.random(),
        photos: [
            {
                src: quartzKitchenFront,
                isVertical: true
            },
            {
                src: quartzKitchenSide,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Кварц"',
        description: [
            "Корпус: ЛДСП",
            "Фасад: МДФ Софт Крем",
            "Фурнитура: Hettich"
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "ldsp+mdf"
        },
        colors: [
            "#a3bec5",
            "#6b5851"
        ],
        style: {
            height: "300px"
        },
        imgContainerStyle: {
            height: "70%"
        }
    },
    {
        // TIMBER
        id: Math.random(),
        photos: [
            {
                src: timberClosetClosed
            },
            {
                src: timberClosetOpen
            }, 
        ],
        name: 'Шкаф "Тимбер"',
        colors: [
            "#ada2a0",
            "#6b4b38",
            "#c0bcc3"
        ],
        description: [
            "Корпус: ЛДСП Egger",
            "Фасад: МДФ Дуб Молочный", 
        ],
        query: {
            type: "closet",
            material: "ldsp+mdf"
        }
    },
    {
        // UYT
        id: Math.random(),
        photos: [
            {
                src: bed,
                isVertical: true
            },
            {
                src: desk,
                isVertical: true
            }, 
        ],
        name: 'Детская "Уют"',
        description: [
            "Корпус: ЛДСП",
            "Фасад: МДФ"
        ],
        colors: [
            "#c4c2b6",
            "repeating-linear-gradient(-45deg, #aca89c, #786859 3px)", 
        ],
        query: {
            type: "child",
            material: "ldsp"
        }
    },
    {
        // LIME
        id: Math.random(),
        photos: [
            {
                src: lessLimeKitchenLeft,
                isVertical: true
            },
            {
                src: lessLimeKitchenRight,
                isVertical: true
            }, 
        ],
        name: 'Кухня "Лайм"',
        description: [
            "Корпус: ЛДСП",
            "Фасад: МДФ Плёнке"
        ],
        colors: [
            "linear-gradient(150deg, #e1fd5b 50%, #ffffff)",
            "#dfe1d4",
            "linear-gradient(45deg, #4f3d2b 20%, #86634d 50%, #4f3d2b)", 
        ],
        query: {
            type: "kitchen",
            shape: "angled",
            material: "lsdp+mdf"
        }
    }, 
];
works.forEach((work, index)=>{
    work.photos.forEach((photo)=>photo.src = parentFolder + photo.src
    );
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (works);


/***/ })

};
;