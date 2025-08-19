//APlayer
const aplayer = document.getElementById('aplayer');
if (aplayer) {
    let dataSong = JSON.parse(aplayer.dataset.song);
    let dataSinger = JSON.parse(aplayer.dataset.singer);

    const ap = new APlayer({
        container: aplayer,
        lrcType: 1,
        audio: [{
            name: dataSong.title,
            artist: dataSinger.fullName,
            url: dataSong.audio,
            cover: dataSong.avatar,
            lrc: dataSong.lyrics
        }],
        autoplay: true,
        volume: 0.5
    });
    const avatar = document.querySelector(".singer-detail .inner-avatar")

    ap.on('play', function () {
        avatar.style.animationPlayState = "running";
    });
    ap.on('pause', function () {
        avatar.style.animationPlayState = "paused";
    });
    ap.on('ended', function () {
        fetch(`/songs/listen/${dataSong._id}`, {
            method: "PATCH"
        }).then(res => res.json())
            .then((data) => {
                const elementListenSapn = document.querySelector(".singer-detail .inner-listen span");
                elementListenSapn.innerHTML = `${data.listen} lượt nghe`
            });
    });
}
//End APlayer

//Button Like
const buttonLike = document.querySelector("[button-like]");
if (buttonLike) {
    buttonLike.addEventListener("click", function () {
        const id = buttonLike.getAttribute("button-like");
        const isActive = buttonLike.classList.contains("active");//xem trong btn có chưa class là active ko
        const typeLike = isActive ? "dislike" : "like";
        fetch(`/songs/like/${typeLike}/${id}`, {
            method: "PATCH"
        }).then(res => res.json())
            .then((data) => {
                if (data.code === 200) {
                    const span = buttonLike.querySelector("span");
                    span.innerHTML = `${data.like} lượt thích`;
                    buttonLike.classList.toggle("active");
                }
            });
    })
}
//End Button Like

//Button farovite song
const listButtonFarovite = document.querySelectorAll("[button-farovite-song]");

if (listButtonFarovite.length > 0) {
    listButtonFarovite.forEach(buttonFarovite => {
        buttonFarovite.addEventListener("click", function () {
            const id = buttonFarovite.getAttribute("button-farovite-song");
            const isActive = buttonFarovite.classList.contains("active");//xem trong btn có chưa class là active ko
            const typeFarovite = isActive ? "unfarovite" : "farovite";
            console.log(`/songs/farovite/${typeFarovite}/${id}`);
            fetch(`/songs/farovite/${typeFarovite}/${id}`, {
                method: "PATCH"
            }).then(res => res.json())
                .then((data) => {
                    if (data.code === 200) {
                        buttonFarovite.classList.toggle("active");
                    }
                });
        })
    })
}
//End Button farovite song

//Search suggest
const boxSearch = document.querySelector(".box-search");
if (boxSearch) {
    const input = boxSearch.querySelector("input[name='keyword']")
    const boxSuggest = boxSearch.querySelector(".inner-suggest")
    input.addEventListener("keyup", () => {
        const keyword = input.value;
        fetch(`/search/suggest?keyword=${keyword}`)
            .then(res => res.json())
            .then(data => {
                const songs = data.songs
                if (songs.length > 0) {
                    boxSuggest.classList.add("show");
                    const html = songs.map(song => {
                        return `
                            <a class="inner-item" href="/songs/detail/${song.slug}">
                                <div class="inner-image" bis_skin_checked="1">
                                    <img src="${song.avatar}">
                                </div>
                                <div class="inner-info" bis_skin_checked="1">
                                    <div class="inner-title" bis_skin_checked="1"> ${song.title} </div>
                                    <div class="inner-singer" bis_skin_checked="1">
                                        <i class="fa-solid fa-microphone-lines"></i> ${song.infoSinger.fullName}
                                    </div>
                                </div>
                            </a>
                        `
                    })
                    const boxList = boxSuggest.querySelector(".inner-list")
                    boxList.innerHTML = html.join("")
                } else {
                    boxSuggest.classList.remove("show");
                }
            })
    })
}
//End Search suggest