var CAMPING = [
    {
        itemName: "Camping Chair",
        itemThumb: "thumb1_300x300.jpg",
        itemImg: "thumb1_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Cooler",
        itemThumb: "thumb2_300x300.jpg",
        itemImg: "thumb2_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Hammock",
        itemThumb: "thumb3_300x300.jpg",
        itemImg: "thumb3_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Hatchet",
        itemThumb: "thumb4_300x300.jpg",
        itemImg: "thumb4_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Head Lamp",
        itemThumb: "thumb5_300x300.jpg",
        itemImg: "thumb5_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Lantern",
        itemThumb: "thumb6_300x300.jpg",
        itemImg: "thumb6_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Lighter",
        itemThumb: "thumb7_300x300.jpg",
        itemImg: "thumb7_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Pillow",
        itemThumb: "thumb8_300x300.jpg",
        itemImg: "thumb8_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Sleeping Bag",
        itemThumb: "thumb9_300x300.jpg",
        itemImg: "thumb9_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    },
    {
        itemName: "Tent",
        itemThumb: "thumb10_300x300.jpg",
        itemImg: "thumb10_500x500.jpg",
        itemShortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dicta.",
        itemLongDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo consequatur adipisci quos, dolorum dignissimos debitis placeat quis quia, natus corporis atque sed consequuntur recusandae!",
    }
];

function initListeners(){
    $(".camping").on("click", function(e){
        let campingIndex = e.currentTarget.id;
        console.log(campingIndex);
        $("#app").html(`<div class="fullGame">
        <img class="fullImg" src="images/camping/thumbs-assets/${CAMPING[campingIndex].itemImg}" alt="${CAMPING[campingIndex].itemName}">
        <div class="fullText">
            <p class="fullTitle">${CAMPING[campingIndex].itemName}</p>
            <hr>
            <p class="fullDesc">${CAMPING[campingIndex].itemLongDesc}</p>
        </div>
        <div class="close">CLOSE</div>
    </div>`);

        addCloseListener();
    })
}

function addCloseListener(){
    $(".close").on("click", function(e){
        $("#app").html("");
        loadData();
    })
}

function loadData(){
    $.each(CAMPING, function(idx, camping){
        $("#app").append(`<div class="camping" id=${idx}>
        <img src="images/camping/thumbs-assets/${camping.itemThumb}" alt="${camping.itemName}">
        <div class="text">
            <p class="title">${camping.itemName}</p>
            <hr>
            <p class="desc">${camping.itemShortDesc}</p>
        </div>
    </div>`);
    });

    initListeners();
}

$(document).ready(function(){
    loadData();
})