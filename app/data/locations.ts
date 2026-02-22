export interface LocationData {
  slug: string;
  city: string;
  state: string;
  county?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  heroDescription: string;
  aboutArea: string[];
  distanceFromBase: string;
  popularServices: string[];
  nearbyAreas: Array<{ slug: string; label: string }>;
  testimonial?: { text: string; name: string; vehicle: string };
}

export const locations: LocationData[] = [
  {
    slug: "pleasanton-tx",
    city: "Pleasanton",
    state: "TX",
    county: "Atascosa County",
    metaTitle:
      "Mobile Auto Detailing in Pleasanton, TX | Shine On Autocare",
    metaDescription:
      "Professional mobile auto detailing and ceramic coating in Pleasanton, TX. Veteran-owned. Interior, exterior, paint correction, and ceramic coating. We come to you.",
    keywords:
      "auto detailing Pleasanton TX, mobile detailing Pleasanton, ceramic coating Pleasanton TX, car detailing near me Pleasanton, veteran-owned detailing Pleasanton",
    h1: "Mobile Auto Detailing in Pleasanton, TX",
    heroDescription:
      "Shine On Autocare is based right here in Pleasanton — the Cowboy Capital of the World. We bring professional detailing straight to your driveway. No drop-offs, no hassle.",
    aboutArea: [
      "Pleasanton is home. This is where Shine On Autocare started, and it's the community we know best. You might see us parked on Oaklawn Road working on a truck, or out past the rodeo grounds buffing out a ranch rig. In a town built on rodeo heritage and small-town trust, our reputation is everything — and we earn it one vehicle at a time.",
      "If you've driven the caliche roads around here, you know what they do to a paint job. Add in 100-degree summers and that South Texas sun beating down from April through October, and your vehicle's finish doesn't stand a chance without some protection. That's where ceramic coating and regular detailing come in — it's maintenance, not vanity.",
      "We roll up to your house or your office with everything we need. Full interior steam clean, exterior polish, paint correction, ceramic coating — all of it happens on-site. You don't have to drive anywhere or rearrange your day around a detail shop's schedule.",
      "Being veteran-owned isn't just a label we slap on the website. It's how we run the business — show up on time, do the job right, leave it better than we found it. Pleasanton is a place where a handshake still means something, and we plan to keep it that way.",
    ],
    distanceFromBase: "Home base",
    popularServices: [
      "Ceramic Coating",
      "Interior Detailing",
      "Exterior Detailing",
      "Full Detail Premium",
      "Paint Correction",
      "Truck & SUV Detailing",
    ],
    nearbyAreas: [
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "jourdanton-tx", label: "Jourdanton" },
      { slug: "poteet-tx", label: "Poteet" },
      { slug: "floresville-tx", label: "Floresville" },
      { slug: "atascosa-county", label: "Atascosa County" },
    ],
    testimonial: {
      text: "I've tried other detailers in the area and none compare. They were on time, professional, and the results speak for themselves. My car is spotless!",
      name: "Sarah M.",
      vehicle: "2021 Honda CR-V",
    },
  },
  {
    slug: "san-antonio-tx",
    city: "San Antonio",
    state: "TX",
    county: "Bexar County",
    metaTitle:
      "Mobile Auto Detailing in San Antonio, TX | Shine On Autocare",
    metaDescription:
      "Professional mobile auto detailing and ceramic coating serving San Antonio, TX. Veteran-owned. We come to your home or office. Interior, exterior, ceramic coating, and paint correction.",
    keywords:
      "auto detailing San Antonio TX, mobile detailing San Antonio, ceramic coating San Antonio, car detailing near me San Antonio, mobile car wash San Antonio, best auto detailer San Antonio",
    h1: "Mobile Auto Detailing in San Antonio, TX",
    heroDescription:
      "Mobile detailing across the Alamo City. We drive to your home or office — ceramic coating, paint correction, full interior and exterior work. No drop-offs, no waiting rooms.",
    aboutArea: [
      "San Antonio is a big city, and we cover a lot of it. Stone Oak, the Medical Center, Alamo Heights, Southtown, the neighborhoods around Lackland and Fort Sam Houston — we bring the whole mobile setup to your driveway or your office parking lot. You don't need to fight 1604 traffic or sit in some lobby flipping through old magazines. We come to you.",
      "A lot of our SA customers are military families or folks working on base who schedule a detail during the workday. By the time they clock out, their vehicle looks like it just rolled off a dealership lot. That convenience is the whole point of mobile detailing in a city this spread out.",
      "Over 300 days of sunshine a year sounds great until you see what it does to paint and leather. The UV here is brutal, and if you park outside — which most people do — your vehicle is taking damage every single day. Ceramic coating is the best defense we offer, and a regular detail schedule keeps the interior from turning into a dust bowl.",
      "We're based in Pleasanton, about 35 miles south, but we built a big chunk of our business right here in San Antonio. Our SA customers come back because we're consistent. Same crew, same standards, no surprises.",
    ],
    distanceFromBase: "~35 miles from Pleasanton",
    popularServices: [
      "Ceramic Coating",
      "Interior & Exterior Detailing",
      "Paint Correction",
      "Full Detail Premium",
      "Truck & SUV Detailing",
    ],
    nearbyAreas: [
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "south-san-antonio", label: "South San Antonio" },
      { slug: "lytle-tx", label: "Lytle" },
      { slug: "devine-tx", label: "Devine" },
      { slug: "floresville-tx", label: "Floresville" },
    ],
    testimonial: {
      text: "Had them come out to SA for a ceramic coating on my F-150. Incredible work. My truck looks better than when I drove it off the lot. Worth every penny!",
      name: "Marcus T.",
      vehicle: "2022 Ford F-150",
    },
  },
  {
    slug: "jourdanton-tx",
    city: "Jourdanton",
    state: "TX",
    county: "Atascosa County",
    metaTitle:
      "Mobile Auto Detailing in Jourdanton, TX | Shine On Autocare",
    metaDescription:
      "Mobile auto detailing and ceramic coating in Jourdanton, TX. Interior, exterior, paint correction, and more. Veteran-owned. We come to you.",
    keywords:
      "auto detailing Jourdanton TX, mobile detailing Jourdanton, car detailing Jourdanton Texas, ceramic coating Jourdanton",
    h1: "Mobile Auto Detailing in Jourdanton, TX",
    heroDescription:
      "Jourdanton is right down Highway 16 from our home base. We'll bring the full mobile detailing setup to your door — five minutes away, not five zip codes.",
    aboutArea: [
      "Jourdanton is the Atascosa County seat and one of our closest service areas — literally just a few miles up the road from Pleasanton. We were detailing vehicles here before we had a website. It's a small farming community where people know each other, and most of our Jourdanton customers came through word of mouth.",
      "Trucks around here work hard. They haul trailers, run fence lines, and sit on caliche driveways baking in the sun. A full interior and exterior detail makes a real difference when your vehicle doubles as your office and your work site. We clean out the grit, treat the leather, and get the paint back to where it should be.",
      "You don't need to drive to San Antonio for this. We pull up to your house or your business on Highway 16 with a full mobile rig — water, power, all our products. The whole job happens on-site, and you go about your day.",
    ],
    distanceFromBase: "~5 miles from Pleasanton",
    popularServices: [
      "Interior Detailing",
      "Truck & SUV Detailing",
      "Exterior Detailing",
      "Full Detail Premium",
    ],
    nearbyAreas: [
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "poteet-tx", label: "Poteet" },
      { slug: "atascosa-county", label: "Atascosa County" },
      { slug: "san-antonio-tx", label: "San Antonio" },
    ],
  },
  {
    slug: "floresville-tx",
    city: "Floresville",
    state: "TX",
    county: "Wilson County",
    metaTitle:
      "Mobile Auto Detailing in Floresville, TX | Shine On Autocare",
    metaDescription:
      "Professional mobile auto detailing in Floresville, TX. Ceramic coating, interior detailing, exterior detailing, and paint correction. Veteran-owned. We come to you.",
    keywords:
      "auto detailing Floresville TX, mobile detailing Floresville, car detailing Floresville Texas, ceramic coating Floresville, Wilson County detailing",
    h1: "Mobile Auto Detailing in Floresville, TX",
    heroDescription:
      "Mobile detailing for the Peanut Capital of Texas. We drive out to Floresville and Wilson County so you don't have to drive anywhere.",
    aboutArea: [
      "Floresville has the Peanut Festival, a solid downtown, and a whole lot of Wilson County pride. It's also about 20 miles from our Pleasanton base, so we're out this way regularly. If you've seen our trailer parked in a driveway around town, that was us — and your neighbor's vehicle probably looked a lot better when we left.",
      "The roads between Floresville and the surrounding ranches are dusty. That fine Wilson County grit gets into everything — your paint, your air vents, the seams of your seats. A real detail goes deeper than a car wash can. We steam clean interiors, clay bar the paint, and seal everything so it stays cleaner longer.",
      "Ceramic coating is popular with our Floresville customers because it cuts down on how often you need a full wash. The coating repels water and dirt, so a quick rinse handles what used to take a full afternoon with a bucket and sponge. We do the full application on-site at your home or business.",
    ],
    distanceFromBase: "~20 miles from Pleasanton",
    popularServices: [
      "Interior & Exterior Detailing",
      "Ceramic Coating",
      "Truck & SUV Detailing",
      "Paint Correction",
    ],
    nearbyAreas: [
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "poteet-tx", label: "Poteet" },
      { slug: "jourdanton-tx", label: "Jourdanton" },
    ],
    testimonial: {
      text: "Got the ceramic coating package and could not be happier. Water just rolls right off. Three months later and it still looks freshly washed after a quick rinse.",
      name: "Amanda K.",
      vehicle: "2022 BMW X3",
    },
  },
  {
    slug: "poteet-tx",
    city: "Poteet",
    state: "TX",
    county: "Atascosa County",
    metaTitle:
      "Mobile Auto Detailing in Poteet, TX | Shine On Autocare",
    metaDescription:
      "Mobile auto detailing and ceramic coating in Poteet, TX. Interior, exterior, paint correction, and odor removal. Veteran-owned. We come to you.",
    keywords:
      "auto detailing Poteet TX, mobile detailing Poteet, car detailing Poteet Texas, ceramic coating Poteet",
    h1: "Mobile Auto Detailing in Poteet, TX",
    heroDescription:
      "Mobile detailing in Poteet, TX — home of the Strawberry Festival and some seriously dusty trucks. We bring the detail to you.",
    aboutArea: [
      "Poteet is a small town with a big reputation, thanks to the Strawberry Festival that draws people from all over South Texas every April. But the rest of the year, it's a quiet rural community where trucks outnumber sedans and most vehicles live outside, not in a garage. That's exactly why mobile detailing makes sense here.",
      "We see a lot of work trucks and SUVs in Poteet — rigs that haul feed, pull trailers, and carry the whole family to church on Sunday. A good detail isn't about making it look fancy. It's about getting the mud out of the floor mats, conditioning the dash before it cracks, and pulling a layer of oxidation off the paint so it actually shines again.",
      "We're only about 15 miles from Poteet, so scheduling is easy and we don't charge extra to come out. Full interior, exterior, paint correction, ceramic coating — all done in your driveway. You stay home, we do the work.",
    ],
    distanceFromBase: "~15 miles from Pleasanton",
    popularServices: [
      "Interior Detailing",
      "Truck & SUV Detailing",
      "Exterior Detailing",
      "Odor Removal",
    ],
    nearbyAreas: [
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "jourdanton-tx", label: "Jourdanton" },
      { slug: "lytle-tx", label: "Lytle" },
      { slug: "atascosa-county", label: "Atascosa County" },
      { slug: "san-antonio-tx", label: "San Antonio" },
    ],
    testimonial: {
      text: "I'm picky about who touches my Mustang. These guys earned my trust. Paint correction took out swirls I thought were permanent. The depth and gloss is unreal.",
      name: "James P.",
      vehicle: "2018 Ford Mustang GT",
    },
  },
  {
    slug: "lytle-tx",
    city: "Lytle",
    state: "TX",
    county: "Atascosa County",
    metaTitle:
      "Mobile Auto Detailing in Lytle, TX | Shine On Autocare",
    metaDescription:
      "Mobile auto detailing in Lytle, TX. Ceramic coating, paint correction, interior and exterior detailing. Veteran-owned mobile service.",
    keywords:
      "auto detailing Lytle TX, mobile detailing Lytle, car detailing Lytle Texas, ceramic coating Lytle, mobile car wash Lytle TX",
    h1: "Mobile Auto Detailing in Lytle, TX",
    heroDescription:
      "Mobile detailing for Lytle, TX — right off I-35 between San Antonio and Laredo. We drive to you so you can skip the trip into the city.",
    aboutArea: [
      "Lytle is one of those I-35 corridor towns where everybody either commutes to San Antonio or works the land around here. Either way, vehicles take a beating. Highway miles pile on the road film, brake dust, and tar, and the ranch trucks aren't faring any better on the back roads. We handle both.",
      "A lot of Lytle folks used to drive into SA for a decent detail. That's a 30-minute trip each way plus wait time — half your Saturday gone. We show up at your place with the full rig and do the work while you're home. Interior steam clean, full exterior wash and polish, ceramic coating, paint correction — whatever you need.",
      "This is a small town with a rural, ranch-community feel, and we treat it that way. We're not some big franchise. We're a veteran-owned outfit from Pleasanton that does good work and shows up when we say we will. That's it.",
    ],
    distanceFromBase: "~20 miles from Pleasanton",
    popularServices: [
      "Exterior Detailing",
      "Interior & Exterior Detailing",
      "Ceramic Coating",
      "Truck & SUV Detailing",
    ],
    nearbyAreas: [
      { slug: "devine-tx", label: "Devine" },
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "poteet-tx", label: "Poteet" },
    ],
  },
  {
    slug: "devine-tx",
    city: "Devine",
    state: "TX",
    county: "Medina County",
    metaTitle:
      "Mobile Auto Detailing in Devine, TX | Shine On Autocare",
    metaDescription:
      "Mobile auto detailing and ceramic coating in Devine, TX. Interior, exterior, and paint correction. Veteran-owned mobile service.",
    keywords:
      "auto detailing Devine TX, mobile detailing Devine, car detailing Devine Texas, ceramic coating Devine, Medina County detailing",
    h1: "Mobile Auto Detailing in Devine, TX",
    heroDescription:
      "Mobile detailing in Devine, TX — the Warhead City. We bring the full setup to your driveway in Medina County. No trip to San Antonio required.",
    aboutArea: [
      "Devine calls itself the Warhead City, and if you've driven through, you've probably noticed the missile display off the highway. It's a small Medina County town between San Antonio and the Eagle Ford Shale region, which means a lot of the trucks we see out here are working rigs — oil field dust, mud, the works. We clean them up right in your driveway.",
      "Even if your vehicle never sees a job site, the Devine heat and sun will wear it down. Clear coat oxidizes, dashboards fade, and leather dries out. A ceramic coating stops most of that damage before it starts. For vehicles that are already showing wear, paint correction brings back the depth and color you thought was gone for good.",
      "We're about 25 miles from Devine, and we come out regularly. No storefront, no lobby, no appointment at a shop across town. Just us, our mobile rig, and everything we need to do the full job at your location — home, ranch, or business.",
    ],
    distanceFromBase: "~25 miles from Pleasanton",
    popularServices: [
      "Interior & Exterior Detailing",
      "Truck & SUV Detailing",
      "Ceramic Coating",
      "Full Detail Premium",
    ],
    nearbyAreas: [
      { slug: "lytle-tx", label: "Lytle" },
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "poteet-tx", label: "Poteet" },
    ],
  },
  {
    slug: "atascosa-county",
    city: "Atascosa County",
    state: "TX",
    metaTitle:
      "Mobile Auto Detailing in Atascosa County, TX | Shine On Autocare",
    metaDescription:
      "Professional mobile auto detailing serving all of Atascosa County, TX. Ceramic coating, interior, exterior, paint correction, and more. Veteran-owned.",
    keywords:
      "auto detailing Atascosa County, mobile detailing Atascosa County TX, car detailing Atascosa County, ceramic coating Atascosa County Texas",
    h1: "Mobile Auto Detailing in Atascosa County, TX",
    heroDescription:
      "We're based in Atascosa County and we detail every corner of it — Pleasanton, Jourdanton, Poteet, Charlotte, and all the ranch land in between.",
    aboutArea: [
      "Atascosa County is ranching country. Spread-out communities, long stretches of highway, and a whole lot of trucks and SUVs that earn their keep. This is where Shine On Autocare was born, and we've detailed more vehicles in this county than we can count. If you live here, there's a good chance your neighbor has already used us.",
      "The driving conditions out here are hard on vehicles. Caliche ranch roads coat everything in white dust. Summer heat warps dashboards and cooks clear coat. And because most people park outside — no garages out on the ranch — the UV damage adds up fast. A detail once or twice a year, paired with a ceramic coating, makes a real difference in how long your vehicle holds up.",
      "We cover the whole county. It doesn't matter if you're in a subdivision in Pleasanton, on a property south of Charlotte, or out between Jourdanton and Poteet — we'll drive to you. That's the point of mobile detailing, and it makes a lot more sense than hauling your truck 40 minutes to San Antonio for the same service.",
      "This is our community. We're veteran-owned, locally operated, and the kind of business that answers the phone when you call. We'd rather earn your repeat business by doing great work than by running ads.",
    ],
    distanceFromBase: "Home county",
    popularServices: [
      "Ceramic Coating",
      "Interior Detailing",
      "Truck & SUV Detailing",
      "Exterior Detailing",
      "Full Detail Premium",
      "Odor Removal",
    ],
    nearbyAreas: [
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "jourdanton-tx", label: "Jourdanton" },
      { slug: "poteet-tx", label: "Poteet" },
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "floresville-tx", label: "Floresville" },
    ],
    testimonial: {
      text: "I use my truck for work so it takes a beating. These guys did a full interior and exterior detail and it looked like a different vehicle. Fair price too.",
      name: "Carlos G.",
      vehicle: "2019 Chevy Silverado 2500",
    },
  },
  {
    slug: "south-san-antonio",
    city: "South San Antonio",
    state: "TX",
    county: "Bexar County",
    metaTitle:
      "Mobile Auto Detailing in South San Antonio, TX | Shine On Autocare",
    metaDescription:
      "Mobile auto detailing serving South San Antonio. Ceramic coating, interior, exterior, and paint correction. Veteran-owned. We come to you.",
    keywords:
      "auto detailing South San Antonio, mobile detailing South SA, car detailing south side San Antonio, ceramic coating South San Antonio TX",
    h1: "Mobile Auto Detailing in South San Antonio, TX",
    heroDescription:
      "South San Antonio is the closest part of the city to our Pleasanton base. We get here faster than most SA-based detailers, and the work speaks for itself.",
    aboutArea: [
      "The south side is where San Antonio meets our part of the world. Coming up I-37 from Pleasanton, we're in the Brooks City-Base area in about 25 minutes — often faster than a detailer driving across San Antonio in traffic. That's why South SA was one of the first parts of the city where we started picking up regular customers.",
      "This part of town is growing fast. New subdivisions going up, established neighborhoods holding strong, and a lot of people commuting along the I-35 South and Loop 410 corridors. Vehicles out here rack up miles and sit in the sun all day. A detail every few months keeps the interior fresh and the paint from fading out.",
      "We have a good number of customers who work at Lackland or Fort Sam Houston and book us during the workday. They park it, we detail it, and by quitting time their vehicle looks better than the day they bought it. We also serve the residential areas, apartment complexes, and businesses all along the south side corridor.",
    ],
    distanceFromBase: "~25 miles from Pleasanton",
    popularServices: [
      "Interior & Exterior Detailing",
      "Ceramic Coating",
      "Full Detail Premium",
      "Paint Correction",
    ],
    nearbyAreas: [
      { slug: "san-antonio-tx", label: "San Antonio" },
      { slug: "pleasanton-tx", label: "Pleasanton" },
      { slug: "lytle-tx", label: "Lytle" },
      { slug: "poteet-tx", label: "Poteet" },
    ],
    testimonial: {
      text: "Scheduled a detail before a road trip and they squeezed me in same week. Interior smells amazing, exterior is spotless. Will definitely be calling again.",
      name: "Rachel W.",
      vehicle: "2021 Kia Telluride",
    },
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((loc) => loc.slug === slug);
}
