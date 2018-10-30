const artworkData = {
  artwork_id: '3353876',
  additional_images: [],
  category: 'Paintings',
  description: 'Oil and Polyurethane on Panel',
  favorite_count: 20,
  id: 2389620,
  id_user_art: 2579688,
  images: {
    large: '//assets.local.saatchiart.com/saatchi/611571/art/2579688/1649596-TAIKHUNY-8.jpg',
    medium: '//assets.local.saatchiart.com/saatchi/611571/art/2579688/1649596-TAIKHUNY-7.jpg',
    medium_print_crop:
      '//assets.local.saatchiart.com/saatchi/611571/art/2579688/1649596-TAIKHUNY-32.jpg',
    small: '//assets.local.saatchiart.com/saatchi/611571/art/2579688/1649596-TAIKHUNY-6.jpg',
    tiny_square: '//assets.local.saatchiart.com/saatchi/611571/art/2579688/1649596-TAIKHUNY-22.jpg',
  },
  is_safe: true,
  keywords: ['Photography', 'Awesome', 'Nice'],
  limited_url: 'http://limited.local.saatchiart.com/print/The-Butter-Thief/611571/2389620',
  materials: null,
  mediums: 'oil and Polyurethane',
  title: 'The Butter Thief',
  views: 30,
  products: [
    {
      depth: '10',
      height: '10',
      id: 1,
      is_available_for_sale: true,
      is_original: true,
      is_sold_out: false,
      legacy_sku: 'P1-U1-A3163069',
      material: '',
      options: [],
      original: {
        aisp: {
          bucket: 'b5',
          freight_amount: 6000,
          version: 'V4',
        },
        packaging_type: 'rolled',
        shipping_dimensions: {
          depth: 10,
          height: 10,
          width: 20,
        },
      },
      price: 61500,
      sku: 'P1-U1-A3353876-T1',
      units_produced: 1,
      width: '60.8',
    },
    {
      depth: '0.1',
      height: '10',
      id: 142,
      is_available_for_sale: true,
      is_original: false,
      is_sold_out: false,
      legacy_sku: 'P142-U1-A3163069-L',
      material: 'Fine Art Paper',
      options: [
        {
          description: '10x10 Single Mat with 14x14 Acrylic',
          extended_description:
            'Solid wood frame in black color|Milled from FSC-certified and responsibly harvested solid wood|Cut-to-order, hand-made frame|Sleek box profile, .75" wide and 1.25" tall|Bright white mat border|Thick .098" framing-grade clear acrylic|Mounted on acid-free foam board|Arrives ready to hang with installed hardware',
          framing_type_id: 9,
          height: '10',
          id: 'F113',
          price: 8000,
          title: 'Black',
          width: '10',
        },
        {
          description: '10x10 Single Mat with 14x14 Acrylic',
          extended_description:
            'Solid wood frame in white color|Milled from FSC-certified and responsibly harvested solid wood|Cut-to-order, hand-made frame|Sleek box profile, .75" wide and 1.25" tall|Bright white mat border|Thick .098" framing-grade clear acrylic|Mounted on acid-free foam board|Arrives ready to hang with installed hardware',
          framing_type_id: 10,
          height: '10',
          id: 'F114',
          price: 8000,
          title: 'White',
          width: '10',
        },
        {
          description: '10x10 Single Mat with 14x14 Acrylic',
          extended_description:
            'Solid wood frame in natural color|Milled from FSC-certified and responsibly harvested solid wood|Cut-to-order, hand-made frame|Sleek box profile, .75" wide and 1.25" tall|Bright white mat border|Thick .098" framing-grade clear acrylic|Mounted on acid-free foam board|Arrives ready to hang with installed hardware',
          framing_type_id: 11,
          height: '10',
          id: 'F115',
          price: 8000,
          title: 'Natural Wood',
          width: '10',
        },
      ],
      price: 14900,
      sku: 'P142-U1-A3353876-T3',
      subject: 'Women',
      units_produced: 222,
      width: '10',
    },
  ],
}

const artistData = {
  avatar: 'https://d38we5ntdyxyje.cloudfront.net/298693/profile/UKMZQNQT_avatar_tiny_square.jpg',
  firstName: 'Thomas',
  lastName: 'Saliot',
  city: 'Paris',
  country: 'France',
  id: 611571,
  profileUrl: '/thomassaliot',
  joinDate: 'July 3, 2011',
  styles: ['Figurative Paintings', 'Portraits'],
  description:
    'Edgy, fresh, and provocative, the works of Thomas Saliot are what he calls a snapshot of our century. Taking inspiration from photographs, Thomas paints familiar and hyper-realistic subjects who command attention.',
  badges: [
    {
      image:
        'https://s3.amazonaws.com/saatchi-general/art-detail/artist-section/collection-badge.svg',
      title: 'Featured',
      description: 'Artist featured by Saatchi Art in a collection',
    },
    {
      image:
        'https://s3.amazonaws.com/saatchi-general/art-detail/artist-section/printcatalog-badge.svg',
      title: 'Collectors',
      description: 'Featured in Saatchi Art’s printed catalog, sent to thousands of art collectors',
    },
    {
      image:
        'https://s3.amazonaws.com/saatchi-general/art-detail/artist-section/insidestudio-badge.svg',
      title: 'Inside the Studio',
      description: 'Artist featured by Saatchi Art in a collection <a>Inside The Studio</a>',
    },
  ],
  largeStudioPic:
    'https://d38we5ntdyxyje.cloudfront.net/298693/profile/UKMZQNQT_avatar_medium_square.jpg',
  video: 'https://www.youtube.com/watch?v=7MCgFYzbom0',
}

const printDetailResponse = {
  artist: artistData,
  artwork: artworkData,
  url: '/amp/art/3/4',
}

const errorResponse = {
  url: 'amp/bad_url',
}

const mainResponse = {
  url: 'amp/main',
}

module.exports = { errorResponse, mainResponse, printDetailResponse }
