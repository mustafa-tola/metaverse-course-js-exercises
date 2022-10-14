const make_album = (art_name,alb_title,no_tracks=0) => {
    const obj = {
        art_name,
        alb_title
    }
    if(no_tracks != 0) {
        obj["no_tracks"] = no_tracks
    }
    return obj;
}

console.log(make_album('Dragon New Warm Mountain I Believe in You','Big Thief'))
console.log(make_album('Motomami','Rosalía'))
console.log(make_album('Sick!','Earl Sweatshirt'))
console.log(make_album('Mr. Morale & the Big Steppers','Kendrick Lamar',18))