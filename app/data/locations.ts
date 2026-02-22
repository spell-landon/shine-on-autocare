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
      "Shine On Autocare is based right here in Pleasanton, TX. As your local mobile detailing team, we bring professional-grade results straight to your driveway — no drop-offs, no hassle.",
    aboutArea: [
      "Pleasanton is our home base and where Shine On Autocare was founded. As the seat of Atascosa County, Pleasanton is a tight-knit South Texas community where word of mouth matters. That's why we treat every vehicle like it belongs to a neighbor — because it usually does.",
      "The South Texas climate is tough on vehicles. Between the intense sun, caliche dust, and summer heat that can hit 100+ degrees, your car's paint and interior take a beating year-round. Regular detailing isn't just about looks — it's about protecting your investment from UV damage, oxidation, and the grit that works its way into every surface.",
      "Whether you're on Oaklawn Road, near the high school, or out past the rodeo grounds, we come to you fully equipped and ready to work. Our mobile setup means you don't have to drive anywhere or wait around at a shop. We handle everything from a basic interior clean to full ceramic coating right at your home or office.",
      "We're proud to be a veteran-owned business serving the community we live in. Our military background drives the discipline and attention to detail we bring to every job, and our roots in Pleasanton keep us grounded in the values that matter — honesty, hard work, and genuine care for our customers.",
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
      "Professional mobile detailing for the San Antonio area. We bring showroom-quality results to your home or office — ceramic coating, paint correction, interior and exterior detailing, and more.",
    aboutArea: [
      "San Antonio is the largest city in our service area and a market where vehicle owners expect top-tier results. From the Medical Center to Alamo Heights, Stone Oak to Southtown, we bring our fully equipped mobile unit to wherever you are in the city. No fighting traffic to drop your car off — we handle everything right in your driveway or parking spot.",
      "With over 300 days of sunshine a year, San Antonio's UV exposure is one of the harshest in the country. That intense Texas sun fades paint, cracks leather, and deteriorates rubber and trim faster than most people realize. A professional ceramic coating or regular detailing schedule is the best way to protect your vehicle from the relentless heat and keep it looking sharp year-round.",
      "We serve residential neighborhoods, office parks, and apartment complexes throughout San Antonio and the surrounding suburbs. Whether you're in the 78209, 78258, or 78245, we'll come to you. Many of our SA customers schedule us during their workday so their vehicle is freshly detailed by the time they head home.",
      "As a veteran-owned business based in nearby Pleasanton, we bring small-town values and big-city quality to every job in San Antonio. Our repeat customers appreciate the consistency — same team, same standards, same attention to detail every single time.",
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
      "Serving Jourdanton and Atascosa County with professional mobile detailing. From daily drivers to ranch trucks, we bring the shine to your doorstep.",
    aboutArea: [
      "Jourdanton is just a short drive from our Pleasanton home base, making it one of the first communities we began serving. As the other main town in Atascosa County, Jourdanton shares the same small-town feel and rugged South Texas landscape that demands extra care for your vehicle's finish.",
      "Between ranch roads, caliche dust, and summer heat, vehicles in Jourdanton take a real beating. Whether you're driving a work truck that hauls equipment or a family SUV that runs kids around town, regular detailing keeps your vehicle protected and looking good despite the conditions.",
      "We serve all of Jourdanton and the surrounding rural areas. Our mobile setup means you don't need to drive to Pleasanton or San Antonio for a quality detail — we come to your home, ranch, or business with everything we need.",
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
      "Professional mobile detailing for Floresville and Wilson County. We bring showroom-quality results to your driveway — no drop-offs needed.",
    aboutArea: [
      "Floresville, the county seat of Wilson County, is known for its peanut festival and its strong community roots. Located just east of Pleasanton, it's well within our regular service area and one of the towns where we have a growing base of repeat customers.",
      "Wilson County roads kick up plenty of dust and debris that settle on your vehicle's paint and work their way into the cabin. The combination of rural driving and intense South Texas sun means your vehicle needs consistent care to stay protected and looking good.",
      "We serve Floresville residents and businesses with the same full range of services available to our Pleasanton and San Antonio customers — from a quick interior detail to full ceramic coating. Our mobile service means zero hassle for you.",
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
      "Professional mobile detailing serving Poteet and southern Atascosa County. From strawberry festival season to everyday driving, we keep your vehicle looking its best.",
    aboutArea: [
      "Poteet is famous for its Strawberry Festival, but it's also home to hardworking folks who take pride in their vehicles. Located in southern Atascosa County, Poteet is a natural extension of our Pleasanton service area and a community we're proud to serve.",
      "Vehicles in and around Poteet face the same South Texas challenges — dust, heat, and UV exposure. Many of our Poteet customers drive trucks and SUVs that double as work vehicles and family haulers. Regular detailing helps maintain resale value and keeps the cabin comfortable for everyone.",
      "Our mobile detailing unit is fully equipped to handle any service right at your Poteet home or business. No need to drive to San Antonio for a quality detail — we bring it to you.",
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
      "Professional mobile detailing for Lytle and the I-35 corridor. Convenient, quality detailing that comes to your home or office.",
    aboutArea: [
      "Lytle sits along the I-35 corridor between San Antonio and Laredo, making it a natural stop in our service area. Whether you're a local resident or your vehicle takes a beating from daily highway commutes, we bring the same professional results right to your doorstep.",
      "I-35 traffic and construction mean your vehicle picks up road film, brake dust, and tar faster than usual. Our exterior detailing and paint protection services help combat the daily wear and keep your paint looking clean between details.",
      "We serve all of Lytle and the surrounding area with our full menu of mobile detailing services. From a quick interior refresh to ceramic coating, we've got you covered without you having to drive to San Antonio.",
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
      "Professional mobile detailing serving Devine and Medina County. Quality detailing at your doorstep — no drop-offs, no waiting.",
    aboutArea: [
      "Devine is located along the I-35 corridor in Medina County, southwest of San Antonio. It's a growing community where residents appreciate the convenience of mobile services — especially when it means not having to drive 30+ minutes for a quality auto detail.",
      "Like most South Texas towns, vehicles in Devine deal with constant dust, heat, and sun exposure. Our professional detailing services help protect your paint, interior, and overall vehicle condition against these relentless elements.",
      "We bring our full range of services to Devine, including ceramic coating, paint correction, and complete interior and exterior detailing. Our mobile setup means everything happens at your location — home, office, or ranch.",
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
      "Serving every corner of Atascosa County with professional mobile detailing. Pleasanton, Jourdanton, Poteet, Charlotte, and everywhere in between.",
    aboutArea: [
      "Atascosa County is our home territory. Based in Pleasanton — the county seat — Shine On Autocare was built to serve this community. We know the roads, we know the people, and we know exactly what the South Texas climate does to vehicles.",
      "From the ranches south of Charlotte to the neighborhoods in Pleasanton and Jourdanton, Atascosa County vehicles deal with caliche dust, ranch roads, intense heat, and relentless UV exposure. These conditions break down paint, dry out leather, and leave interiors covered in a fine layer of grit that regular car washes can't touch.",
      "Our mobile service covers the entire county. Whether you're in town or on a ranch road, we bring our fully equipped detailing unit to your location. No need to drive to San Antonio for professional-quality work — we deliver the same results right here at home.",
      "We take pride in being a local, veteran-owned business that serves our own community. When you hire Shine On Autocare, you're not just getting a detail — you're supporting a neighbor who cares about doing the job right.",
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
      "Professional mobile detailing for the south side of San Antonio. We're closer than you think — based in nearby Pleasanton, we cover South SA and the 410/I-35 South corridor.",
    aboutArea: [
      "South San Antonio is the closest part of the city to our Pleasanton home base, making it one of the most convenient areas for us to serve. Whether you're near Brooks City Base, along the I-35 South corridor, or in the communities around Loop 410 South, we can typically get to you faster than most San Antonio-based detailers.",
      "The south side of San Antonio is a growing, diverse community with a mix of established neighborhoods and new development. Vehicle owners here appreciate the convenience and value of mobile detailing — no driving across town, no waiting rooms, just quality results at your location.",
      "We serve residential and commercial locations throughout South San Antonio. Many of our south side customers work at Lackland, Randolph, or the medical facilities along the 410 corridor and schedule details during their workday.",
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
