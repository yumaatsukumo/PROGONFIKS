/* ============================================================
   PROGON FILM — script.js
   ============================================================ */

/* ── Film Data ────────────────────────────────────────────── */
const MOVIES = [ 
     { id: 1, title: "THOR", genre: "",  badge: "HD", poster: "", link: "https://playmogo.com/e/90v20cakyr0u" },
     { id: 1, title: "101 Dalmatet", genre: "",  badge: "HD", poster: "", link: "https://playmogo.com/e/tehfj80tbj2z" },
     { id: 1, title: "skubi dhe batman", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYp41EwC26XoZaN4iBpiFozuNJDecBzmGZs1NDKFnvw&s", link: "https://playmogo.com/e/vxtq4lfe98y1" },
     { id: 1, title: "PITER PAN KTHIMI", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQS8e787Cj5N8SQXOyoNAz_TOi8zQKWp0GkJYY1i7sVNHfbeUYlTW-DU&s=10", link: "https://playmogo.com/e/rq9uuwd3u78f" },
     { id: 1, title: "asteriks dhe obeliks", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl27kcs982qjeceFbtpBr6IKPaQEPq716kTcIidJSVtw&s=10", link: "https://playmogo.com/e/dpdohdomjgoa" },
     { id: 1, title: "spirit", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2Pb__nqgEMFGqxiiwdUhk7hPt81qvwbzZu9_c00AHH_C5grAvd8EF4w&s=10", link: "https://playmogo.com/e/6alcxijfkhhi" },
     { id: 1, title: "Trili", genre: "",  badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Tinker_Bell_DVD.jpg/250px-Tinker_Bell_DVD.jpg", link: "https://playmogo.com/e/s3pqwq7mj52s" },
     { id: 1, title: "Familja e Këmbëmadhit", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEY8W86MM7kucGeKOwEMqWWD_tw746W5LKw3R2lMUrbg&s", link: "https://playmogo.com/e/dqjy50tee866" },
     { id: 1, title: "skubi du dhe john cena", genre: "",  badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Scooby-Doo%21_WrestleMania_Mystery.jpg", link: "https://playmogo.com/e/cfvepsg04y8a" },
     { id: 1, title: "Bebi boss 2", genre: "",  badge: "HD", poster: "https://i5.walmartimages.com/seo/The-Boss-Baby-Family-Business-Blu-ray_ecd7c6cf-61a4-4797-8a59-997333640369.f96d2ca8d2a5f681fee16696f4f9bb4a.jpeg", link: "https://playmogo.com/e/vxwhitqlz239" },
     { id: 1, title: "Mamilja Michels", genre: "",  badge: "HD", poster: "https://variety.com/wp-content/uploads/2022/01/mitchells-vs-machines.png", link: "https://playmogo.com/e/oswe5rzy11zo" },
     { id: 1, title: "turbo", genre: "",  badge: "HD", poster: "https://static.wikia.nocookie.net/fictionalcharacters/images/b/b6/Turbo.png/revision/latest?cb=20140121144715", link: "https://playmogo.com/e/pp5lu2nybasg" },
     { id: 1, title: "kalorsi Justin", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW-iJ6vBIkP-2xj_VGxu-uc-6aU4W0txUk-Hulbtcww&s=10", link: "https://playmogo.com/e/or3w15hl5gfr" },
     { id: 1, title: "batman 2", genre: "",  badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/4/43/Legobatman2.jpg", link: "https://playmogo.com/e/pmgmun2ov6d2" },
     { id: 1, title: "shtepia ne fush", genre: "",  badge: "HD", poster: "https://static.wikia.nocookie.net/international-dubbing/images/8/82/Home_on_the_Range_2004_DVD_Cover.png/revision/latest?cb=20220407151257", link: "https://playmogo.com/e/cpicr61lb7eu" },
     { id: 1, title: "skubi du muzika vampirit", genre: "",  badge: "HD", poster: "https://m.media-amazon.com/images/S/pv-target-images/4f5572271f799feec63c401006b72458ebe6cee2a6e4300ed713621c8fd16f11.jpg", link: "https://playmogo.com/e/dt1qvbvt8l0b" },
     { id: 1, title: "skubi du hallwin", genre: "",  badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNjM4Yjg5ZmMtYTM1Mi00NWY4LThjZTktZjljMDgwMDNkNDEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://playmogo.com/e/k7p4904rsyqz" },
     { id: 1, title: "Universiteti monsterave", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wPXmRkqsVzSehRPzidpXorWNJAq_m1LecKgXZg0CsPdoMhkq7rmAuv8y&s=10", link: "https://playmogo.com/e/pwcxk0hkw0xz" },
    { id: 71, title: "6 heronjte", year: 2014, rating: "N/A", genre: "Animation/Action", duration: "1h 42m", badge: "HD", poster: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11077390-2314815255034716.jpg", link: "https://playmogo.com/e/vw6za55p49qz" },
     { id: 1, title: "avatari 2026", genre: "",  badge: "HD", poster: "https://static.wixstatic.com/media/bb6e45_ec9fbe5102d14b368bf9d8bdb1b549c2~mv2.jpg/v1/fill/w_568,h_852,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bb6e45_ec9fbe5102d14b368bf9d8bdb1b549c2~mv2.jpg", link: "https://playmogo.com/e/ck57zps0a5k0" },
     { id: 1, title: "Malfi", genre: "",  badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BZTJkNTJkZGItNjliYS00ZWIxLTg3ZDMtZTQwMjRmMmM1ZDE2XkEyXkFqcGc@._V1_.jpg", link: "https://playmogo.com/e/si17heoh5bz0" },
   
     { id: 1, title: "Super mario 2", genre: "",  badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Super_Mario_Galaxy_Movie_poster.jpeg", link: "https://playmogo.com/e/swbmcni4lvjz" },
     { id: 1, title: "Minins dhe monsterat", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzrvfzJO66de0tHaH_zOo2uvAP6hHmRhbO7w5w_nozA7u6Ic_B_4NnJI&s=10", link: "https://playmogo.com/e/eaia08uhe3ex" },
     { id: 1, title: "Skubi du ne hapsir", genre: "komedi",  badge: "HD", poster: "https://resizing.flixster.com/aItbwT4P-GuIeTvQQSH5e9o3eoc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11385123_p_v8_ad.jpg", link: "https://playmogo.com/e/wy2da2o0mj3y" },
     { id: 1, title: "Toy story 5 ", genre: "me titra",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglF_qqFOD8hAzJHj5GEy0-9QnDdW3sVInhfh25iEMwBe0hRsEvpZxKAkJ&s=10", link: "https://playmogo.com/e/o1th6qq5mzgx" },
     { id: 1, title: "Zotopia 2", genre: "familjar.komedi",  badge: "HD", poster: "https://static.wikia.nocookie.net/jhmovie/images/3/3a/Zootopia_2.jpg/revision/latest?cb=20260320195202", link: "https://playmogo.com/e/7yqxoq7x64wv" },
     { id: 1, title: "Njeriu merimang", genre: "Serial",  badge: "HD", poster: "https://m.media-amazon.com/images/I/61Pjp3yQLXL._AC_UF1000,1000_QL80_.jpg", link: "https://beacons.ai/progon/njeriumerimang" },
     { id: 1, title: "BATMAN", genre: "",  badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOTfQ6u8In9u-xuY_omBLkboRm-Otk0VufLA&s", link: "https://myvidplay.com/e/fzjfgtm8d57s" },
     { id: 1, title: "Djemt e kqij 2 ", genre: "aksion ",  badge: "HD", poster: "https://m.media-amazon.com/images/I/71o-DXhBu4L.jpg", link: "https://myvidplay.com/e/6ju59cx221b5" },
     { id: 11, title: "KAPITEN BREKUSHI", year: 2017, rating: "7.5", genre: "Animation/Comedy", duration: "1h 29m", badge: "HD", poster: "https://images.pathe-thuis.nl/12839_450x640.jpg", link: "https://playmogo.com/e/kwvv33rjqs7p" },
  { id: 1, title: "Grinchi", year: 2000, rating: "N/A", genre: "Family/Fantasy", duration: "1h 44m", badge: "HD", poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/smxA8yvZ0LzDPer9BIRd4pyOpx1.jpg", link: "https://myvidplay.com/d/ng5wrcu53s4e" },
  { id: 2, title: "Si i vodhi Grinchi Krishtlindjet", year: 2000, rating: "N/A", genre: "Family/Comedy", duration: "1h 44m", badge: "HD", poster: "https://albaniandubs.weebly.com/uploads/5/7/8/2/57825701/si-vodhi-grinci-krishtlindjet-2000-albanian-dubs_orig.jpg", link: "https://myvidplay.com/e/uh6mw6lae8v7" },
  { id: 3, title: "Kenget e Krishtlindjeve", year: 2009, rating: "N/A", genre: "Drama/Fantasy", duration: "1h 36m", badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/8/8d/ChistmasCarol2009-Poster.jpg", link: "https://myvidplay.com/e/u83s4r9sphq8" },
  { id: 4, title: "Krishtlindjet e Arturit", year: 2011, rating: "N/A", genre: "Animation/Family", duration: "1h 37m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowMl2SKFdMhJmbwdgd2ISB836YIeSd66YhTBFZU6-G-UAIOlaGom82sXeqGmBFML15gFO&s=10", link: "https://myvidplay.com/e/9jild8apm9tu" },
  { id: 5, title: "I vetem ne shtepi 4", year: 2002, rating: "N/A", genre: "Comedy/Family", duration: "1h 24m", badge: "HD", poster: "https://images.moviesanywhere.com/44f89feaf09a51b9a86619d6d672708e/3bcdd91e-2b0c-4cf8-aa58-ce14bee9a31d.jpg", link: "https://myvidplay.com/e/nqcqzud8fvkq" },
  { id: 6, title: "I vetem ne shtepi 1", year: 1990, rating: "N/A", genre: "Comedy/Family", duration: "1h 43m", badge: "HD", poster: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg", link: "https://myvidplay.com/e/b09ejftj7hmf" },
  { id: 7, title: "YU GI OH Piramida e Drites", year: 2004, rating: "N/A", genre: "Anime/Action", duration: "1h 39m", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/beeef01a-4120-4f02-8b3b-8eb80fc5ecdf__link-in-bio__links-block__home__3a0fc4f5-9c21-45d6-93c3-9c092f0cc5c6__3d7ab190-06c8-4913-b1e7-833f273b37f5__12569018-bde9-4d9f-a55e-26405d829fbd.webp?t=1742304063687", link: "https://myvidplay.com/e/oryormwp4cp0" },
  { id: 8, title: "YU GI OH Ana e Erresires", year: 2006, rating: "N/A", genre: "Anime/Action", duration: "1h 35m", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/7a9ef58e-b797-4e41-936c-90479a32aac9__link-in-bio__links-block__home__3a0fc4f5-9c21-45d6-93c3-9c092f0cc5c6__bd30459f-836a-4441-b696-900f719fd0a5__de01a3c7-3a3f-41bc-833e-65fab0f39ed7.webp?t=1741951381709", link: "https://myvidplay.com/e/rwmgkzxsrndp" },
  { id: 9, title: "Gjithcka dua per krishtlindje", year: 2007, rating: "N/A", genre: "Family/Comedy", duration: "1h 35m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNDJhMmVjMzEtNmE3Yy00YjczLTk0YzItY2IyMmEyMzY1ZTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://myvidplay.com/e/n32tz811r6i0" },
  { id: 10, title: "Fantastiket 2", year: 2018, rating: "N/A", genre: "Animation/Action", duration: "1h 58m", badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Incredibles_2_%282018_animated_film%29.jpg", link: "https://myvidplay.com/e/lmhsdygusglb" },
  { id: 11, title: "KAPITEN BREKUSHI", year: 2017, rating: "7.5", genre: "Animation/Comedy", duration: "1h 29m", badge: "HD", poster: "https://images.pathe-thuis.nl/12839_450x640.jpg", link: "https://playmogo.com/e/seb1kvzfiqg8" },
  { id: 12, title: "Perandori Kusko", year: 2000, rating: "N/A", genre: "Animation/Comedy", duration: "1h 18m", badge: "HD", poster: "https://openair.al/wp-content/uploads/2024/08/Cmendurite-e-Perandorit-Kusko-TiranaOpenAir-273x300.jpg", link: "https://playmogo.com/e/z9tlaky33ybl" },
  { id: 13, title: "Ratchet and Clank", year: 2016, rating: "N/A", genre: "Animation/Action", duration: "1h 34m", badge: "HD", poster: "https://external-preview.redd.it/ratchet-and-clank-2016-receives-new-update-eight-years-v0-11Y8CwGCmBOb9YvKuo__IgTqisIc26ggPFHltGoBHuI.jpg?auto=webp&s=2481c5a0480e3497dcc568aeabd8cc6a786a7100", link: "https://myvidplay.com/e/m5s31dxe16xx" },
  { id: 14, title: "Kung Fu Panda", year: 2008, rating: "N/A", genre: "Animation/Action", duration: "1h 32m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://voe.sx/e/1uiynjyhck0t" },
  { id: 15, title: "I vetem ne shtepi 2", year: 1992, rating: "N/A", genre: "Comedy/Family", duration: "2h", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNDJiYjQyNzctMGYxOC00Zjk3LThjNzEtYmQ5NThiNjAzZGMyXkEyXkFqcGc@._V1_.jpg", link: "https://myvidplay.com/e/zsby9mn61mi5" },
  { id: 16, title: "Krishtlindjet e Mikit", year: 1999, rating: "N/A", genre: "Animation/Family", duration: "N/A", badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/f/f8/Mickey%27s_Once_Upon_A_Christmas.jpg", link: "https://myvidplay.com/e/ti4av9lt7bh4" },
  { id: 17, title: "Aventura e shen klausit", year: "N/A", rating: "N/A", genre: "Family/Fantasy", duration: "N/A", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/7b304b27-1f81-45cb-af66-59b27a0ec7f8__link-in-bio__links-block__home__3a0fc4f5-9c21-45d6-93c3-9c092f0cc5c6__5fd10234-a688-49f0-9d7d-276f83e94b01__77c01932-1314-4489-a591-b983af0246e8.webp?t=1757672783414", link: "https://myvidplay.com/d/aim8spbaiifs" },
  { id: 18, title: "Ekspresi polar", year: 2004, rating: "N/A", genre: "Animation/Adventure", duration: "1h 40m", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/6273f3d0-e00a-46d2-85d8-72226f1213bb__link-in-bio__links-block__home__9b7e4cab-3143-4910-b9f4-1831ff305a84__0838a31e-3102-4bdd-82ab-5fef9447278f__32bc4791-07c5-4bbd-856f-67d21a5c2020.jpg?t=1736278339709", link: "https://dooodster.com/e/7zsq1v1ii3xq" },
  { id: 19, title: "Klaus", year: 2019, rating: "N/A", genre: "Animation/Family", duration: "1h 36m", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/383ea461-28b4-4063-8233-8e7efa07e264__link-in-bio__links-block__home__9b7e4cab-3143-4910-b9f4-1831ff305a84__f3542cc2-94a1-442e-a44a-d181b612d0cb__c3cbcf10-be98-4301-9165-8662774eae62.jpg?t=1736074686426", link: "https://myvidplay.com/e/n7vcr7lxed8s" },
  { id: 20, title: "XHUXHI I LUMTUR", year: "N/A", rating: "N/A", genre: "Animation/Comedy", duration: "N/A", badge: "HD", poster: "https://cdn.beacons.ai/user_content/dSip6zLoXifRmvnZMDMZRKWwPGq1/referenced_images/f8d0bdd5-91c7-45ed-b113-bfa977a449a3__link-in-bio__links-block__home__9b7e4cab-3143-4910-b9f4-1831ff305a84__5bbe0f1c-fc62-4bab-90e5-57c8ade11361__dae9a28d-c2dd-48cc-8a43-5bcdcf666bd3.jpg?t=1735988841622", link: "https://www.youtube.com/watch?v=PUR940Fqs-E" },
  { id: 21, title: "MAQOKU ME QIZME", year: 2011, rating: "N/A", genre: "Animation/Adventure", duration: "1h 30m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFRkX-bCvYpc21_90RV4t0RzpvRAnu7qw_w&s", link: "https://myvidplay.com/e/ua4dqj7f1vor" },
  { id: 22, title: "Planeti thesarit", year: 2002, rating: "N/A", genre: "Animation/Sci-Fi", duration: "1h 35m", badge: "HD", poster: "https://albaniandubs.weebly.com/uploads/5/7/8/2/57825701/planeti-i-thesarit_orig.jpg", link: "https://myvidplay.com/e/e74sem5sjkyc" },
  { id: 23, title: "Njeriu merimang 2", year: 2004, rating: "N/A", genre: "Action/Sci-Fi", duration: "2h 7m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Cy5Z1DfzVg_x3hysgZPHm5TOAQLOVicEvVZTZDAEdIUslMvNUdsCJO7YaomEp5s48f8&usqp=CAU", link: "https://myvidplay.com/e/ahkx4pmt6ms0" },
  { id: 24, title: "Njeriu merimang ne nje univers tjeter", year: 2023, rating: "N/A", genre: "Animation/Action", duration: "2h 20m", badge: "HD", poster: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-08/MM-1192%20%20Spiderman%20Across%20the%20Spider%20Verse.png?itok=uRWY1BBg", link: "https://dsvplay.com/e/lw7wjyfc3zpv" },
  { id: 25, title: "Zotopia", year: 2016, rating: "N/A", genre: "Animation/Comedy", duration: "1h 48m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIlC7HpRcaopwLUVq7G-Zf611zGBvw8-EMLY6LBpMNn-dvVaLJ5p-DUyAmp7rVUk9904&usqp=CAU", link: "https://dsvplay.com/e/h1sfuw9et47b" },
  { id: 26, title: "ZOTOPIA 2", year: 2025, rating: "N/A", genre: "Animation/Comedy", duration: "N/A", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BOWNmZGQ0OTktMDIyZS00YjJkLTg5MTEtZTk2NGM4NTM5MDE2XkEyXkFqcGc@._V1_.jpg", link: "https://voe.sx/e/7nttnfbr4su3" },
  { id: 27, title: "Makinat", year: 2006, rating: "N/A", genre: "Animation/Comedy", duration: "1h 57m", badge: "HD", poster: "https://images.moviesanywhere.com/9d3e252253e87a6c330a3677e3acb400/91c2a4f6-c811-47fb-934a-68db3ef3658a.jpg", link: "https://voe.sx/e/5uulo6xck648" },
  { id: 28, title: "Makinat 3", year: 2017, rating: "N/A", genre: "Animation/Comedy", duration: "1h 42m", badge: "HD", poster: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8670939/cars3jackson.jpg?quality=90&strip=all&crop=18.597412109375,0,62.80517578125,100", link: "https://dsvplay.com/e/p16lxephwyhp" },
  { id: 29, title: "Epik", year: 2013, rating: "N/A", genre: "Animation/Adventure", duration: "1h 42m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BYTJmMWJmZTktZmM2Zi00ZmE0LWJiYWMtMDRlNDdhMmVjNjA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/i9ebg3rqwj9h" },
  { id: 30, title: "MAKINAT 2", year: 2011, rating: "N/A", genre: "Animation/Comedy", duration: "1h 46m", badge: "HD", poster: "https://m.media-amazon.com/images/I/911pF4wxWCL._AC_UF1000,1000_QL80_.jpg", link: "https://dsvplay.com/e/7ctixphk0umz" },
  { id: 31, title: "Tomi dhe Xherri ne film", year: 2021, rating: "N/A", genre: "Animation/Comedy", duration: "1h 41m", badge: "HD", poster: "https://images.moviesanywhere.com/77e40f83c657fe5fba988e9dcbc8095e/63814f0e-0763-4593-b5a1-4d6f79ccc6af.jpg", link: "https://dsvplay.com/e/90hcd8m8eegw" },
  { id: 32, title: "Pufet", year: 2011, rating: "N/A", genre: "Animation/Adventure", duration: "1h 43m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4JZVQw2dcNLyhicnVDnkJqbFcj8VSaE4lA&s", link: "https://dsvplay.com/e/nqmhzrq3p022" },
  { id: 33, title: "Barbi dhe magjia e Pegasusit", year: 2005, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 25m", badge: "HD", poster: "https://albaniandubs.weebly.com/uploads/5/7/8/2/57825701/barbi-dhe-magjia-e-pegasus_orig.jpg", link: "https://dsvplay.com/e/8umkcfqnrapr" },
  { id: 34, title: "Goku sfera e dragoit super hero", year: 2022, rating: "N/A", genre: "Anime/Action", duration: "1h 40m", badge: "HD", poster: "https://i.redd.it/weird-trope-death-has-no-consequences-v0-ym6y3lpgawtf1.jpg?width=1434&format=pjpg&auto=webp&s=e39980f57d22c0f506d59add0539eff817ceef92", link: "https://dsvplay.com/e/ayx4sgerryi1" },
  { id: 35, title: "Putrat e Hekurta", year: 2022, rating: "N/A", genre: "Animation/Comedy", duration: "1h 38m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BOTMxNmZhNzAtMDRiYy00Y2ExLWE0NDctOGM0YjUwMGU1YzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/ivdlplhtibzg" },
  { id: 36, title: "Kung fu Panda 4", year: 2024, rating: "N/A", genre: "Animation/Action", duration: "1h 34m", badge: "HD", poster: "https://image.tmdb.org/t/p/original/zTrN8SY6ik7mIcS9GpWLrydGJ1J.jpg", link: "https://dsvplay.com/e/tpio6g1vxix3" },
  { id: 37, title: "Ted Eksploratori", year: 2012, rating: "N/A", genre: "Animation/Adventure", duration: "1h 32m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BZGEyYjhlYjYtNGQ1Ny00OTdhLWE0YjItY2I0OWZmZmRkYzUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/9timybowam0k" },
  { id: 38, title: "Djem te keqij", year: 2022, rating: "N/A", genre: "Animation/Comedy", duration: "1h 40m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BZTljOGJiNjYtYTY1Ni00Yzk4LWI2YTUtNTdhYmYyMTgyNDMxXkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/kz3huadypyrx" },
  { id: 39, title: "Larte", year: 2009, rating: "N/A", genre: "Animation/Adventure", duration: "1h 36m", badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg", link: "https://dsvplay.com/e/iqdc4q8ccaot" },
  { id: 40, title: "Brenda Mendjes 2", year: 2024, rating: "N/A", genre: "Animation/Comedy", duration: "1h 36m", badge: "HD", poster: "https://m.media-amazon.com/images/S/pv-target-images/7390f647a1edb3cd152bda26e4b57a3be4e96dc603af64519a79273ab9850cd6.jpg", link: "https://dsvplay.com/e/pd0ecmfisu4e" },
  { id: 41, title: "Bebi Boss", year: 2017, rating: "N/A", genre: "Animation/Comedy", duration: "1h 37m", badge: "HD", poster: "https://i5.walmartimages.com/seo/The-Boss-Baby-DVD_26ce26e4-f567-4299-88eb-d229bd9c11e0.99832dc68233ed2876242ef95c065067.jpeg", link: "https://dsvplay.com/e/a9g83iy7am57" },
  { id: 42, title: "Poni im i Vogel gjenerata e re", year: 2021, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 31m", badge: "HD", poster: "https://resizing.flixster.com/86i7nx8dN2wuWc93tx0E6eYGBro=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U0NTJhNmY1LTk3ZWMtNDM2Yi1iOTY3LTZjMjg2MjhlMTZjOC5qcGc=", link: "https://dsvplay.com/e/h16k6nfwbsqa" },
  { id: 43, title: "Super Mario", year: 2023, rating: "N/A", genre: "Animation/Adventure", duration: "1h 32m", badge: "HD", poster: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1678188347i/71872942.jpg", link: "https://dsvplay.com/e/2jpjcwpemtc4" },
  { id: 44, title: "Libri i Jetes", year: 2014, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 35m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOAcL6uZMo9g5G0alwF7NL5-o6ll38KKL7Q&s", link: "https://dsvplay.com/e/pyk16iefmtm1" },
  { id: 45, title: "Sofia e Pare", year: "N/A", rating: "N/A", genre: "Animation/Family", duration: "N/A", badge: "HD", poster: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/sofia_the_first_poster.png", link: "https://www.youtube.com/watch?v=luly_eXLMS0" },
  { id: 46, title: "Zogu i vogel", year: 2014, rating: "N/A", genre: "Animation/Adventure", duration: "1h 32m", badge: "HD", poster: "https://cdn.chili.com/images/public/cms/7e/b2/d4/d6/7eb2d4d6-7add-4b41-a31c-76d72fddb7b7.jpg?width=330", link: "https://dsvplay.com/e/d3frkiy6x7f8" },
  { id: 47, title: "Perpara", year: 2020, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 42m", badge: "HD", poster: "https://lipglossandcrayons.com/wp-content/uploads/2020/03/ONWARD_TeaserPoster-scaled.jpg", link: "https://dsvplay.com/e/q3tsowu4qyi7" },
  { id: 48, title: "KUNG FU PANDA DHE LUFTETARI DRAGOIT", year: "N/A", rating: "N/A", genre: "Animation/Dublim Shqip", duration: "N/A", badge: "HD", poster: "https://img1.wsimg.com/isteam/ip/a7289c74-5406-4964-b836-e260a3c8ce44/MV5BZDdjMTY0ZGItMmYwMi00ODQ3LWE5NzEtZTE1NjE2Zj.jpg", link: "https://progon.godaddysites.com/kung-fu-panda-dhe-lufteta" },
  { id: 49, title: "Stina e gjuetis 3", year: 2010, rating: "N/A", genre: "Animation/Comedy", duration: "1h 15m", badge: "HD", poster: "https://openair.al/wp-content/uploads/2024/09/sezoni-gjuetise.jpg", link: "https://dsvplay.com/e/is96qxdu7d1j" },
  { id: 50, title: "Ben 10 serial", year: "N/A", rating: "N/A", genre: "Animation/Action", duration: "N/A", badge: "HD", poster: "https://img1.wsimg.com/isteam/ip/a7289c74-5406-4964-b836-e260a3c8ce44/img.jpg", link: "https://progon.godaddysites.com/ben-10-1" },
  { id: 51, title: "Naruto", year: "N/A", rating: "N/A", genre: "Anime/Action", duration: "N/A", badge: "HD", poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/TheLastNarutomovie.jpg", link: "https://dsvplay.com/e/ri7v5izdanhr" },
  { id: 52, title: "Ne kerkim te nemos", year: 2003, rating: "N/A", genre: "Animation/Adventure", duration: "1h 40m", badge: "HD", poster: "https://m.media-amazon.com/images/I/61gWvgQ2k+L._AC_UF1000,1000_QL80_.jpg", link: "https://dsvplay.com/e/tru792o2zqr3" },
  { id: 53, title: "Kembemadhi", year: 2017, rating: "N/A", genre: "Animation/Adventure", duration: "1h 32m", badge: "HD", poster: "https://cdn.kinocheck.com/i/amkx5rwa4l.jpg", link: "https://dsvplay.com/e/dqjy50tee866" },
  { id: 54, title: "Skubi-Du dhe mallkimi i fantazmës së 13-të", year: 2019, rating: "N/A", genre: "Animation/Mystery", duration: "1h 22m", badge: "HD", poster: "https://albaniandubs.weebly.com/uploads/5/7/8/2/57825701/skubi-du-dhe-mallkimi-i-fantazmes-se-13-te-2019-albanian-dubs_orig.jpg", link: "https://dsvplay.com/e/ky1b4qtn0kl0" },
  { id: 55, title: "Bolt", year: 2008, rating: "N/A", genre: "Animation/Comedy", duration: "1h 36m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMTY3NGVkMmItYWNjMy00MmE0LTlkZmUtNGIxZGJmZTA1YWI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/25s5dref1ni0" },
  { id: 56, title: "Ndertuesit e enderrave", year: 2020, rating: "N/A", genre: "Animation/Adventure", duration: "1h 21m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjAwY2QtYjZlOS00ZTlkLWI1MTktYmE1ZTExZTdmYmI2XkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/76ge7dvwmoms" },
  { id: 57, title: "Shpirti", year: 2020, rating: "N/A", genre: "Animation/Drama", duration: "1h 40m", badge: "HD", poster: "https://m.media-amazon.com/images/I/81y09CotweL._AC_UF894,1000_QL80_.jpg", link: "https://dsvplay.com/e/mcjctn3521g0" },
  { id: 58, title: "Fati", year: 2022, rating: "N/A", genre: "Animation/Adventure", duration: "1h 45m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BOGE0OWViMGQtOGFmYi00NmNkLThlODYtODY4NWQ1Y2Q1MDVkXkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/2825v6u4ishy" },
  { id: 59, title: "Macoku me cizme: Deshira e Fundit", year: 2022, rating: "N/A", genre: "Animation/Action", duration: "1h 42m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-OQM9PBAg1eD0C5zwqhdJJgRQSBMPNjlUBUo9NYbX23HODgX1WNzi1fC6tOM1jNcPA4&usqp=CAU", link: "https://dsvplay.com/e/hoy6zm0b69y7" },
  { id: 60, title: "Fuqia e deshirave", year: 2023, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 35m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH8ai24SVYWNY-6To9nsp7xjIvP61LHNUhg&s", link: "https://dsvplay.com/e/xqtoczwze7og" },
  { id: 61, title: "Aeroplanet", year: 2013, rating: "N/A", genre: "Animation/Comedy", duration: "1h 31m", badge: "HD", poster: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5c7b3ced-d4e4-4b96-89ad-06b16ec85660/compose?aspectRatio=1.78&format=webp&width=1200", link: "https://dsvplay.com/e/5mxgld919wt9" },
  { id: 62, title: "Dragoi i deshirave", year: 2021, rating: "N/A", genre: "Animation/Comedy", duration: "1h 38m", badge: "HD", poster: "https://wallpapers.com/images/hd/netflix-wish-dragon-premiere-mdgg43r3flairl78.jpg", link: "https://dsvplay.com/e/wqmm8tmxpu0g" },
  { id: 63, title: "Mbreti luan 2", year: 1998, rating: "N/A", genre: "Animation/Adventure", duration: "1h 21m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMmJlZDQ0M2UtZjgwNC00MjgxLWIzNjAtY2MyNzIyNjliYjRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/4ftoe0mzd53a" },
  { id: 64, title: "Frozen 2", year: 2019, rating: "N/A", genre: "Animation/Adventure", duration: "1h 43m", badge: "HD", poster: "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg?region=0%2C0%2C540%2C810", link: "https://dsvplay.com/e/pshq85ruogkr" },
  { id: 65, title: "Raja dhe dragoi i fundit", year: 2021, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 47m", badge: "HD", poster: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg", link: "https://dsvplay.com/e/p5xk1r5qupl8" },
  { id: 66, title: "Aladini kthimi xhafarit 2", year: 1994, rating: "N/A", genre: "Animation/Adventure", duration: "1h 9m", badge: "HD", poster: "https://vimg.ipko.tv/mtcms/a8/3/b/a83b0499-fb03-48f7-a8f2-0276536c9678.jpg", link: "https://dsvplay.com/e/z6jihegbfxzg" },
  { id: 67, title: "shrek", year: 2001, rating: "N/A", genre: "Animation/Comedy", duration: "1h 30m", badge: "HD", poster: "https://i.ebayimg.com/images/g/stYAAOSwOiRkx3Zl/s-l1200.jpg", link: "https://dsvplay.com/e/z0pfs1hxcpxo" },
  { id: 68, title: "elemental", year: 2023, rating: "N/A", genre: "Animation/Comedy", duration: "1h 41m", badge: "HD", poster: "https://m.media-amazon.com/images/I/91i0Zgt1ttL._AC_UF1000,1000_QL80_.jpg", link: "https://dsvplay.com/e/ukca8hzzuk18" },
  { id: 69, title: "Ben 10 dhe forcat aliene", year: "N/A", rating: "N/A", genre: "Animation/Action", duration: "N/A", badge: "HD", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7895972_b_v13_aa.jpg", link: "https://progon.godaddysites.com/ben-10-forca-aliene" },
  { id: 70, title: "Rapanzell", year: 2010, rating: "N/A", genre: "Animation/Adventure", duration: "1h 40m", badge: "HD", poster: "https://albaniandubs.weebly.com/uploads/5/7/8/2/57825701/rapanzell-2010-albanian-dubs-2_3.jpg", link: "https://dsvplay.com/e/94gmh2izbhiw" },
  { id: 71, title: "6 heronjte", year: 2014, rating: "N/A", genre: "Animation/Action", duration: "1h 42m", badge: "HD", poster: "https://static.thcdn.com/images/large/original//productimg/1600/1600/11077390-2314815255034716.jpg", link: "https://dsvplay.com/e/bssks8urwof2" },
  { id: 72, title: "Shtegetimi", year: 2023, rating: "N/A", genre: "Animation/Adventure", duration: "1h 31m", badge: "HD", poster: "https://image.tmdb.org/t/p/original/zjVtuOHOGdIG0MQmvDysEZa8qAx.jpg", link: "https://dsvplay.com/d/7c80m3frp3fn" },
  { id: 73, title: "Ferdinandi", year: 2017, rating: "N/A", genre: "Animation/Comedy", duration: "1h 48m", badge: "HD", poster: "https://m.media-amazon.com/images/I/71dNGAcNWwL._UF894,1000_QL80_.jpg", link: "https://dsvplay.com/e/kakr55dbrlk6" },
  { id: 74, title: "legjenda e korres", year: "N/A", rating: "N/A", genre: "Animation/Action", duration: "N/A", badge: "HD", poster: "https://www.platinumgames.com/wp-content/uploads/2016/03/kryvisual_LoK.jpg", link: "https://progon.godaddysites.com/legjenda-e-korres" },
  { id: 75, title: "Moana", year: 2016, rating: "N/A", genre: "Animation/Adventure", duration: "1h 47m", badge: "HD", poster: "https://snworksceo.imgix.net/cds/f4f2ba30-5e1e-4273-8360-d79a3012d12a.sized-1000x1000.jpg?w=1000&dpr=2", link: "https://dsvplay.com/d/f6w3gxx20frw" },
  { id: 76, title: "Skubi du dhe artefaktet magjike", year: "N/A", rating: "N/A", genre: "Animation/Mystery", duration: "N/A", badge: "HD", poster: "https://i.ytimg.com/vi/P2swLZUrUjg/maxresdefault.jpg", link: "https://dsvplay.com/e/iwn61mt60mf1" },
  { id: 77, title: "Keshtjella fluturuese", year: 2004, rating: "N/A", genre: "Animation/Fantasy", duration: "1h 59m", badge: "HD", poster: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/howlsmovingcastle_1.png", link: "https://dsvplay.com/d/p7c423yvt7ct" },
  { id: 78, title: "GJiganti i hekurt", year: 1999, rating: "N/A", genre: "Animation/Action", duration: "1h 26m", badge: "HD", poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidmtZhshrY_s-GueN-UmGkJ1VnzsxiLI9TQeN4JRey-_ZDqfACN1lmhPGv3AG5hRMNuODJx5FgwRtElvJaul78xNLYIusT-mRKLH_JaAsv3VuE-Q2l13zlDe8n2T7X8iTdss3OSoPhR41HCrL_xULxhjFAiBoml3GPbYTT7yk1W4tPrMBc6FN8qAoOmOE/s1500/img.jpg", link: "https://dsvplay.com/e/7tevaq27rgiv" },
  { id: 79, title: "LUKA", year: 2021, rating: "N/A", genre: "Animation/Comedy", duration: "1h 35m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMWMyNGNlZTktODVkNS00ZmMyLTk0NmUtNWVjOWU1MWMzZGMzXkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/p5paqih5kz3l" },
  { id: 80, title: "Rruga per ne eldorado", year: 2000, rating: "N/A", genre: "Animation/Adventure", duration: "1h 29m", badge: "HD", poster: "https://unshavedmouse.com/wp-content/uploads/2018/03/a-road-to-el-dorado-front.jpg?w=620", link: "https://dsvplay.com/e/5hz2843qb5jg" },
  { id: 81, title: "Familja mikells", year: 2021, rating: "N/A", genre: "Animation/Comedy", duration: "1h 53m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNzAyOWNiMjAtNWUzMi00ZDk1LWE5NzYtNDUzMWE1Y2M0NDM2XkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/oswe5rzy11zo" },
  { id: 82, title: "Gjuetaret e troleve", year: 2021, rating: "N/A", genre: "Animation/Action", duration: "1h 46m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMTU0YTUwOGMtZDM5MS00ZGVkLWEzMDAtOWM2NTA1YTFiYWY5XkEyXkFqcGc@._V1_.jpg", link: "https://vide0.net/e/3nzar5j5vtmq" },
  { id: 83, title: "Skubi du dhe samurai", year: 2009, rating: "N/A", genre: "Animation/Mystery", duration: "1h 15m", badge: "HD", poster: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/a2bb1651-3661-44c1-95ff-cacd61e5bdb2/6db9574efd30cfc6a1ef2b8186d133173befdd61.jpg?submitted=1684667030540&host=wbd-images.prod-vod.h264.io&partner=beamcom", link: "https://dsvplay.com/e/1p34qxl8mnzk" },
  { id: 84, title: "batman 2", year: 1992, rating: "N/A", genre: "Action/Sci-Fi", duration: "2h 6m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS57X2ktg87_waSdYYPTW8A5XXa0Yv3aodceb_XPvqoRncq_u6W8-NgX9ffha5zjFH5pQ&usqp=CAU", link: "https://dsvplay.com/e/pmgmun2ov6d2" },
  { id: 85, title: "lego batman 1", year: 2017, rating: "N/A", genre: "Animation/Comedy", duration: "1h 44m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/cwwip2ez8wu9" },
  { id: 86, title: "skubi du perbindeshi i loknesit", year: 2004, rating: "N/A", genre: "Animation/Mystery", duration: "1h 18m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMTJjZTg1Y2ItNTdlZC00MDEwLWIxNzYtYmM5YmQ0YzVmNTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/zrncgqb7opd4" },
  { id: 87, title: "Alvin dhe fytyrketrushet njeriu ujk", year: 2000, rating: "N/A", genre: "Animation/Comedy", duration: "1h 17m", badge: "HD", poster: "https://m.media-amazon.com/images/I/81WvlXwZJTL._AC_UF894,1000_QL80_.jpg", link: "https://dsvplay.com/e/hlmhfgm36nfa" },
  { id: 88, title: "Koko", year: 2017, rating: "N/A", genre: "Animation/Adventure", duration: "1h 45m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/uhgelbq84xp4" },
  { id: 89, title: "Luni tunes dhe shperthimi i tokes", year: 2024, rating: "N/A", genre: "Animation/Comedy", duration: "1h 31m", badge: "HD", poster: "https://lightintheattic.net/cdn/shop/files/843563185810_2000x.jpg?v=1741973293", link: "https://dsvplay.com/e/730b1gkx3dl7" },
  { id: 90, title: "Tomi dhe xherri robinhudi", year: 2012, rating: "N/A", genre: "Animation/Comedy", duration: "1h 22m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNGNhZDI2MmUtNGUwMC00YjZiLWJlMjItYWZkZDE0N2FkZjExXkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/t65buha0mvrc" },
  { id: 91, title: "planeti 51", year: 2009, rating: "N/A", genre: "Animation/Comedy", duration: "1h 31m", badge: "HD", poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUaBRoMlYZEikm6dLBIPAQx93JozoACII75mWcKN8hDnfXppXqGjAsxM6kb44MmXrWTPIX-KOwVfoQZgSpPQ_ioKeKRajt2I6MTQRL_l6W-xFzw3t3l-NDC6gh4oAEMblxNM5lBliSSsw/s1600/Screenshot_37.png", link: "https://dsvplay.com/e/vs9c4356g1ew" },
  { id: 92, title: "Skubiii du", year: 2020, rating: "N/A", genre: "Animation/Comedy", duration: "1h 33m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BNTg4YzE0MmItMzk0My00NjVjLWI1ZjAtOTAxMzc3YTY5YTkzXkEyXkFqcGc@._V1_.jpg", link: "https://dsvplay.com/e/t3cctm8z1fmg" },
  { id: 93, title: "Herbi shkon ne montekarlo", year: 1977, rating: "N/A", genre: "Comedy/Adventure", duration: "1h 44m", badge: "HD", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOYbA-5IDruuhoI4bpSXPwT3cTj7L-x0UBr1qdGjXH-Rf4Tuih656TYKEg8XStowOoJQ&usqp=CAU", link: "https://lukesitturn.com/e/wc8p2139hluw" },
  { id: 94, title: "Si te stervisesh nje dragua 3", year: 2019, rating: "N/A", genre: "Animation/Action", duration: "1h 44m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/4nhzmfdx1jw2" },
  { id: 95, title: "Si te stervisesh nje dragua 2", year: 2014, rating: "N/A", genre: "Animation/Action", duration: "1h 42m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/6wov6sc871ri" },
  { id: 96, title: "Si te stervisesh nje dragua 1", year: 2010, rating: "N/A", genre: "Animation/Action", duration: "1h 38m", badge: "HD", poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg", link: "https://dsvplay.com/e/51umy5jlo309" }
];

/* ── Config ───────────────────────────────────────────────── */
const CARDS_PER_PAGE = 12;
let currentPage    = 1;
let filteredMovies = [...MOVIES];

/* ═══════════════════════════════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════════════════════════════ */
function initTheme() {
  const btn  = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  if (!btn) return;

  const saved = localStorage.getItem('pf-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    if (icon) icon.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('pf-theme', isLight ? 'light' : 'dark');
    if (icon) icon.textContent = isLight ? '☀️' : '🌙';
  });
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR & MOBILE MENU
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   RENDER MOVIES
   ═══════════════════════════════════════════════════════════ */
function renderMovies(movies, page) {
  const grid = document.getElementById('moviesGrid');
  if (!grid) return;

  const start = (page - 1) * CARDS_PER_PAGE;
  const slice = movies.slice(start, start + CARDS_PER_PAGE);

  const noResults = document.getElementById('noResults');
  if (movies.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.add('visible');
    updatePagination(0, 1);
    updateCounter(0);
    return;
  }
  if (noResults) noResults.classList.remove('visible');

  grid.innerHTML = slice.map(m => `
    <a href="${m.link}" class="movie-card" target="_blank">
      <div class="movie-poster">
        ${m.poster ? 
          `<img src="${m.poster}" alt="${m.title}" class="movie-poster-img" onerror="this.src='https://via.placeholder.com/300x450?text=Pa+Poster'">` : 
          `<div class="poster-placeholder"><span>🎬</span><br>PA POSTER</div>`
        }
        ${m.badge ? `<div class="movie-badge">${m.badge}</div>` : ''}
        <div class="movie-rating">⭐ ${m.rating}</div>
        <div class="movie-overlay"><div class="overlay-play">▶</div></div>
      </div>
      <div class="movie-info">
        <div class="movie-title">${m.title}</div>
        <div class="movie-meta"><span>${m.year}</span> • <span>${m.duration}</span></div>
        <div class="movie-genre">${m.genre}</div>
      </div>
    </a>
  `).join('');

  updateCounter(movies.length);
  updatePagination(movies.length, page);
}

function updateCounter(count) {
  const el = document.getElementById('resultCount');
  if (el) el.textContent = `${count} filma`;
}

/* ═══════════════════════════════════════════════════════════
   PAGINATION
   ═══════════════════════════════════════════════════════════ */
function updatePagination(totalItems, page) {
  const container = document.getElementById('pagination');
  if (!container) return;

  const totalPages = Math.ceil(totalItems / CARDS_PER_PAGE);
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  container.innerHTML = html;
}

window.goToPage = function(page) {
  currentPage = page;
  renderMovies(filteredMovies, currentPage);
  window.scrollTo({ top: document.getElementById('moviesSection').offsetTop - 100, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════════════
   SEARCH
   ═══════════════════════════════════════════════════════════ */
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  filteredMovies = MOVIES.filter(m => 
    m.title.toLowerCase().includes(q) || 
    m.genre.toLowerCase().includes(q)
  );
  currentPage = 1;
  renderMovies(filteredMovies, 1);
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  renderMovies(filteredMovies, currentPage);

  const heroSearch = document.getElementById('heroSearch');
  if (heroSearch) {
    heroSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }
  
  const navSearch = document.querySelector('.nav-search input');
  if (navSearch) {
    navSearch.addEventListener('input', (e) => handleSearch(e.target.value));
  }
});
