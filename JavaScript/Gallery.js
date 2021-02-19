function ChangeBgColour() {
    var selectedColour = document.getElementById("backGroundColour")[document.getElementById("backGroundColour").selectedIndex].value;
        if (selectedColour === "#34495E") {
            document.body.style.backgroundColor="#34495E";            
        }else if(selectedColour==="#2DBF12"){
            document.body.style.backgroundColor="#2DBF12";            
        }else if(selectedColour==="#9B59B6"){
            document.body.style.backgroundColor="#9B59B6";
        }else if(selectedColour==="#F1C40F"){
            document.body.style.backgroundColor="#F1C40F";
        }else if(selectedColour==="#3d7cb2"){
            document.body.style.backgroundColor="#3d7cb2";
        }else if(selectedColour==="#000000"){
            document.body.style.backgroundColor="#000000";
        }
}


function ChangeFontColour(){
    var selectedColour=document.getElementById("fontColourOptions")[document.getElementById("fontColourOptions").selectedIndex].value;
        if(selectedColour==="black"){
            document.body.style.color=selectedColour;
        }else if(selectedColour==="#c6f7f7"){
            document.body.style.color=selectedColour;
        }else if(selectedColour==="green"){
            document.body.style.color=selectedColour;
        }else if(selectedColour==="#FF0000"){
            document.body.style.color=selectedColour;
        }else if(selectedColour==="purple"){
            document.body.style.color=selectedColour;
        }
				
} 


//Function for Ella image and description.
function myFunction1(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Ella (Nine Arch Bridge)</h2><p>Laid-back Ella draws travelers to Sri Lanka's highlands with its mountain forests, tea plantations, and relatively cool climate. The wildlife-rich region is also home to caves, cascades, and secluded temples plus the Ella Gap, which offers lofty views between a cleft in two hills.</p><p>Nine Arch Bridge is located in Demodara, between Ella and Demodara railway stations. The surrounding area has seen a steady increase of tourism due to the bridge's architectural ingenuity and the profuse greenery in the nearby hillsides.Popular rumours suggest that when construction work commenced on the bridge, the Great War began between the empires of Europe and the steel assigned for this site was reallocated to Britain's War related projects at the battlefront. As a result, the work came to a standstill, leading the locals to build the bridge with stone bricks and cement, but without steel.</p>";
    document.getElementById("description").appendChild(locationName);
}

//Function for Nuwara Eliya Image and description.
function myFunction2(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML=" <h2>Nuwara Eliya</h2><p>Often referred to as Little England, this genteel highland community does have a rose-tinted, vaguely British-country-village feel to it, with its colonial-era bungalows, Tudor-style hotels, well-tended hedgerows and pretty gardens. Indeed, Nuwara Eliya was once was the favoured cool-climate escape for the hard-working and hard-drinking English and Scottish pioneers of Sri Lanka's tea industry.</p><p>A recent construction boom has blighted the scene to a degree, and the dusty and bustling centre is a thoroughly Sri Lankan urban tangle, but Nuwara Eliya still makes a fine base for a few days' relaxation. The verdant surrounding countryside of tea plantations, carefully tended vegetable plots and craggy hills is highly scenic. Treat yourself to a night in one of Nuwara Eliya's colonial hotels, play a round of golf or a few frames of billiards, and soak up the town's unique bygone heritage.</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction3(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Pinnawala</h2><p>Pinnawala Elephant Orphanage (PEO) ; just as the name suggests holds a unique disposition in the ex-situ animal care. It's success and fame has travelled not just within the country but throughout the world to an extent where Pinnawala synonymous with the Sri Lankan Elephant.</p><p>Currently being a home to 93 elephants the concept was actualized by the late Hon. Minister Kalugalle on the 16<sup>th</sup> of February 1975.  Pinnawala at the time was a very remote area with lush coconut plantations and most importantly an area where the availability of mahouts was not lacking. Also the immense amount of water required by the elephants is supplemented with the availability of “Ma oya” running close by.</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction4(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Arugam Bay</h2><p>Lovely Arugam Bay, a moon-shaped curl of soft sand, is home to a famed point break that many regard as the best surf spot in the country. It's a tiny place, with a population of a few hundred, and everything is dotted along a single road which parallels the coast. So in other words, the epitome of the laid-back beach scene that first drew surfers and sun-seekers to Sri Lanka.</p><p>If you are not a surfer, there are plenty of other draws: beachfront guesthouses, oceanside restaurants and a mellow, swing-another-day-in-a-hammock kind of vibe that is totally removed from the brash west-coast beach resorts. Arugam Bay also makes a great base for several adventures in the surrounding hinterland. During the low season (November to April) things get extremely quiet and many places close altogether, but it can also be a serene time to visit, with few tourists and verdant landscapes.</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction5(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Adams Peak</h2><p>Poking up from the southwestern edge of the hill country, the soaring summit of Adam's Peak (Sri Pada) is simultaneously one of Sri Lanka's most striking natural landmarks and one of its most celebrated places of pilgrimage. A miniature Matterhorn which stands head and shoulders above the surrounding hills, giving a wonderful impression of sheer altitude (even though, at 2243m, it's actually only Sri Lanka's fifth-highest peak). The mountain has accumulated a mass of legends centred around the curious depression at it is summit, the Sri Pada or Sacred Footprint.</p><p>The original Buddhist story claims that this is the footprint of the Buddha himself, made at the request of the local god Saman; different faiths subsequently modified this to suit their own contrasting theologies</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction6(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Pollonaruwa</h2><p>Kings ruled the central plains of Sri Lanka from Polonnaruwa 800 years ago, when it was a thriving commercial and religious centre. The glories of that age can be found in the archaeological treasures that still give a pretty good idea of how the city looked in its heyday. You'll find the archaeological park a delight to explore, with hundreds of ancient structures – tombs and temples, statues and stupas – in a compact core. The Quadrangle alone is worth the trip.</p><p>That Polonnaruwa is close to elephant-packed national parks only adds to its popularity. And with good accommodation and plenty of bikes for hire, the town itself makes a pleasant base for a day or two, fringed by a huge, beautiful tank with a relaxed ambience.Nearby Kaduruwela, 4km east of Polonnaruwa, has the lion's share of banks, shops and other facilities.</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction7(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Nallur</h2><p>In the hot arid lands of Nallur, in Jaffna, rises the majestic Hindu temple for Skanda/ Murugan, the god of love, war and beauty. It has reigned over the land for centuries, attracting devotees from various walks of life. The temple itself embodies a kind of peace that can only be felt in the most divine of places.</p><p>While the original Nallur Kandaswamy Temple was on this same grand scale; the current temple is on a much smaller scale when considering area, whilst still being one of the largest and historically accurate temples still existing in Sri Lanka. The temple has four kopurams, a rarity nowadays; including a massive golden-ochre Rajakopuram standing approximately seven stories (22-25m) tall. Some of the kopurams were built within the last decade. The inner and outer circles usually function as normal roads; except during the temple’s elaborate festival. With beautiful sculptures and architecture created by architects brought in from India; the temple is a visual delight that is best seen directly.</p>";
    document.getElementById("description").appendChild(locationName);
}
function myFunction8(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    var locationName=document.createElement("div");
    locationName.id="Locations";
    locationName.innerHTML="<h2>Red Mosque</h2><p>Sri Lanka's Red Mosque, or Jami Ul-Alfar Masjid, is one of the architectural wonders of the world. Situated in the bustling Pettah district, one of the oldest parts of the city of Colombo, its tall minarets are seen from almost every street, towering over the hustle and bustle of the busy neighborhood streets.</p><p>It is said that the Red Mosque has been a landmark for sailors approaching the port of Colombo ever since it was built in 1908, and upon looking at it you can easily imagine that being true. The mosque's distinct red-and-white pattern, whether swirling or spiraling or alternating, is quite mesmerizing. The domes are built in the shape of pomegranate (unlike the traditional onion shape), and the colorful brick patterns are meant to convey the same image.</p>";
    document.getElementById("description").appendChild(locationName);
}

function removeContent(){
    document.getElementById("description").innerHTML="";
}