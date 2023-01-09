class Music{
    constructor(title, singer, img, file){
        this.title = title
        this.singer = singer
        this.img = img
        this.file = file

    }


    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music('Bu gece', 'Ceg','1.jpg','1.mp3'),
    new Music('Eski Jagged', 'Ceg','2.jpg','2.mp3'),
    new Music('First class', 'Ceg','3.jpg','3.mp3'),
    new Music('Karındeşen Ceg', 'Ceg','4.jpg','4.mp3')
]