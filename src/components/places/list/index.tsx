import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'src/redux';

export class List extends Component<Props> {
  private resultSet: Element[] = [];

  constructor(props: Props) {
    super(props);

    this.buildResultSet();
  }

  buildResultSet = () => {
    const result = [];
    for (let place of response.results) {
      result.push(place);
    }

    this.resultSet = result.map((place) => (
      <Text key={place.place_id}>{place.name}</Text>
    ));
  };

  render() {
    return (
      <View>
        <Text>Get yer shit and get out!</Text>
        <View>{this.resultSet}</View>
      </View>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {};
}
function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}
const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(List);

const response = {
  html_attributions: [],
  next_page_token:
    'ATtYBwJQ1ntXvOvkmPT2umYhYK5lk1zGvStP4GqP3b0f2VtnV-FOF5Xd2vvxnv1gM4pLwc2PcmzO3o36buBahZFdi_RhAdfvvb1HHjfJOoJFPpqr9HXMDxUDQygGi6g1lKJm2QCqkMqLsFu-Bn1OrWGmi1CpdGB5WflSC2Hfh06uQgG6lrxXWJ4eykaZ1OO4Ac5PcyVODNyHOwnZqC9jZy_VSNLfoFvUuJ4rkN48HcjmoL2bp9zpbM4EpSMpuBXSU08YyfIffwhMUE9Gn73VT40i75ffDTqeQn5lKu_GRqNkbt6uahAv-dtiSOpqw1DGM4UiFyMffnTNEjXa0RGjv2_C3WjC1WcoZ4VGa4Bne6vZgN_-4yXGRkgsKfrCd7MxcMQ038hb-N1UM9I9xJhmTw57SPTlcXIGduvAtxW7CqEk36WS',
  results: [
    {
      geometry: {
        location: {
          lat: 43.653226,
          lng: -79.3831843,
        },
        viewport: {
          northeast: {
            lat: 43.85545793597914,
            lng: -79.11689708040795,
          },
          southwest: {
            lat: 43.58102453761487,
            lng: -79.63921897890965,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
      name: 'Toronto',
      photos: [
        {
          height: 1352,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/108252628278597712087">Abdulrahman Ghummied</a>',
          ],
          photo_reference:
            'ATtYBwI04fsUK3rhUwhcM2bFHRRqHE0xYjsQZsxJYZQFSSdEzEej6AQCHyS-1EpDKlt9nGQ702Wtfy7zCufjfAW-4FT493vBV9fo30a8KfIxu9y_nsB9po-f4Gz5HzGLZi5jG-iO6hst4gTnOUMkZqvYhnt_0DD2NMUh7D6ain5YeCSqdBio',
          width: 1079,
        },
      ],
      place_id: 'ChIJpTvG15DL1IkRd8S0KlBVNTI',
      reference: 'ChIJpTvG15DL1IkRd8S0KlBVNTI',
      scope: 'GOOGLE',
      types: ['locality', 'political'],
      vicinity: 'Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.652088,
          lng: -79.37278999999999,
        },
        viewport: {
          northeast: {
            lat: 43.6533989302915,
            lng: -79.3715388697085,
          },
          southwest: {
            lat: 43.6507009697085,
            lng: -79.37423683029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'Holiday Inn Express Toronto Downtown',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3456,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/112013451790082144082">Josefine Wenzel</a>',
          ],
          photo_reference:
            'ATtYBwJQnonr6oBC2wmfSzRMjNZAQlR-RnZga5i6frwwykhinUxFmjJLGGnv3fjkH6a9YBtD0k4yc4Y8IJTmh3SHUM61ri3r9Z7nr32D-R9qx6cndmvsZcWoLIgUG--Bmt7EIvMKWfALsvHg3cBEiimvJA09MK9IoZPL6fxF6LMLGc1drKP5',
          width: 4608,
        },
      ],
      place_id: 'ChIJeWNoPzHL1IkRhleUmv32wd4',
      plus_code: {
        compound_code: 'MJ2G+RV Toronto, ON, Canada',
        global_code: '87M2MJ2G+RV',
      },
      rating: 4,
      reference: 'ChIJeWNoPzHL1IkRhleUmv32wd4',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 1309,
      vicinity: '111 Lombard Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.658273,
          lng: -79.36954399999999,
        },
        viewport: {
          northeast: {
            lat: 43.65964323029151,
            lng: -79.36810401970848,
          },
          southwest: {
            lat: 43.65694526970851,
            lng: -79.37080198029149,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'Toronto Garden Inn Bed and Breakfast',
      photos: [
        {
          height: 2504,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/103582516411290513274">Toronto Garden Inn Bed and Breakfast</a>',
          ],
          photo_reference:
            'ATtYBwLoPwbMpVZnTZpScEo6bosqjbS2vZTm6zlTkhDXr7K_-zZEH_dLA2ns8gEc5ZsvJ01sfKFyzCt56J7VvvMI1-KQMHVhkUHHSqUUDKuqx8KJrKJutzvqSSh6cKHHEIABHkFIvMiWOuqAQ_HefjDYp-ssVMv_pNYC03-Wk_GsWLIcD-mS',
          width: 4008,
        },
      ],
      place_id: 'ChIJBevADkjL1IkRsbpufmKrv9w',
      plus_code: {
        compound_code: 'MJ5J+85 Toronto, ON, Canada',
        global_code: '87M2MJ5J+85',
      },
      rating: 4.4,
      reference: 'ChIJBevADkjL1IkRsbpufmKrv9w',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 88,
      vicinity: '142 Seaton Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6619673,
          lng: -79.36959999999999,
        },
        viewport: {
          northeast: {
            lat: 43.6632408802915,
            lng: -79.3682194197085,
          },
          southwest: {
            lat: 43.6605429197085,
            lng: -79.3709173802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: "Pimblett's Downtown Toronto Bed and Breakfast",
      photos: [
        {
          height: 4160,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/109829775246419131980">Mara Fraser</a>',
          ],
          photo_reference:
            'ATtYBwJKUfDWSfRfzUoKjMShJM6EOVmkmd6fjPuI-r0RNgrxSoDIAdhYaFnNpHy5WeUiM3KrDBSsGmYcQYS-3NUEaAbFT5nxvqnBAX2hYoKoUPAe4aQLmolqUqOfCz5RBa9zLo_lIUYfpTSHg6xfBdDYbqFgYa7gtgQWdgeiN0EpFxdE7lJM',
          width: 2340,
        },
      ],
      place_id: 'ChIJgfDVrUjL1IkRdZHhbSDSXgI',
      plus_code: {
        compound_code: 'MJ6J+Q5 Toronto, ON, Canada',
        global_code: '87M2MJ6J+Q5',
      },
      rating: 3.7,
      reference: 'ChIJgfDVrUjL1IkRdZHhbSDSXgI',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 15,
      vicinity: '242 Gerrard Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.660348,
          lng: -79.37298299999999,
        },
        viewport: {
          northeast: {
            lat: 43.6616653802915,
            lng: -79.37177816970849,
          },
          southwest: {
            lat: 43.6589674197085,
            lng: -79.3744761302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'Pembroke Inn',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 628,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/116949164599277933228">Pembroke Inn</a>',
          ],
          photo_reference:
            'ATtYBwLLswWHAEqcLqTNzWsmH0OFQ53iQdSBrdtSa3tGnZfal8Pt5sCqJpgVDjGYfiNo4ACVQe0AhHMXzniyzDoHXJU826fJP4fHuMdkIKqrq-jD_SpypOW_xhf9askdLAgI4w7XqGD2eCCOO_LqpagzF2b9vBsSp5w-U9bAAReEX0yfoJQ1',
          width: 1024,
        },
      ],
      place_id: 'ChIJ7UiTcknL1IkRQYndvAVrdnE',
      plus_code: {
        compound_code: 'MJ6G+4R Toronto, ON, Canada',
        global_code: '87M2MJ6G+4R',
      },
      rating: 3.1,
      reference: 'ChIJ7UiTcknL1IkRQYndvAVrdnE',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 629,
      vicinity: '117 Pembroke Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6590694,
          lng: -79.3684667,
        },
        viewport: {
          northeast: {
            lat: 43.6603323302915,
            lng: -79.36708071970848,
          },
          southwest: {
            lat: 43.6576343697085,
            lng: -79.3697786802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'Royal Oak Inn',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 2266,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100947777325424833318">Royal Oak Inn</a>',
          ],
          photo_reference:
            'ATtYBwKQ77OYfLqC19yFiN2KO73oRWEe_AP_11y28yqpD8pBblTfduHozdwt-X1cN0idJk8_aCfGBH4g2C_xt_pj7Cqwp2lZbxED-kzEJHEgFqJrEe8ysv_50xjN0h-iArCyRT72wFZVpPRchq6cWolxl5QXlg8mPNmgUhiqxC9-AkUCMOa7',
          width: 3478,
        },
      ],
      place_id: 'ChIJe1Bl20fL1IkR-Xcgyr7Cy7o',
      plus_code: {
        compound_code: 'MJ5J+JJ Toronto, ON, Canada',
        global_code: '87M2MJ5J+JJ',
      },
      rating: 3,
      reference: 'ChIJe1Bl20fL1IkR-Xcgyr7Cy7o',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 394,
      vicinity: '376 Dundas Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6568416,
          lng: -79.3599747,
        },
        viewport: {
          northeast: {
            lat: 43.6582808802915,
            lng: -79.35866381970848,
          },
          southwest: {
            lat: 43.6555829197085,
            lng: -79.3613617802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      name: 'Vistek Toronto',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3096,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102782427137155059467">Sean Carson</a>',
          ],
          photo_reference:
            'ATtYBwLkLagGC_P5_AFdn5PIB4K-BWwbN5laRHtqY6c8fgwZ90VhOVfMXA2lhqjKCeILucT2vOKP6oRyhc6Rlp-o2_ZBnuO8_iqpl0T69cOVrTfSGCm-h7BeZafECRQbaRt0dxXe6YzqAkfyV-jwgR3b1kAT13Ybj418OIxXQXm1PPoxbTgZ',
          width: 4128,
        },
      ],
      place_id: 'ChIJ7U4Xd0DL1IkR3t29omushiU',
      plus_code: {
        compound_code: 'MJ4R+P2 Toronto, ON, Canada',
        global_code: '87M2MJ4R+P2',
      },
      rating: 3.8,
      reference: 'ChIJ7U4Xd0DL1IkR3t29omushiU',
      scope: 'GOOGLE',
      types: [
        'electronics_store',
        'home_goods_store',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 536,
      vicinity: '496 Queen Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.65650970000001,
          lng: -79.36771399999999,
        },
        viewport: {
          northeast: {
            lat: 43.65778048029151,
            lng: -79.3663499197085,
          },
          southwest: {
            lat: 43.65508251970851,
            lng: -79.3690478802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: "O'Canada Guest House",
      photos: [
        {
          height: 3040,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102946232903667342736">Marc Allain</a>',
          ],
          photo_reference:
            'ATtYBwK1jF2OC7-EQN_t0TLlLEkY8H6x0Sm6JmfQcA-VhaYKu3ZaBjtuhlPy04HZ4pme-OgRYhTU_tmSupbSlDtxjmkyv4yoe3UZEBg01Q4-WwIdflo4nS2IZXSUORvgGhN10WvcYLyWvwQBLZuR3OcRwRGYko-ll6i09QXMaHwkGzd2FhsD',
          width: 6080,
        },
      ],
      place_id: 'ChIJbR7ZEjjL1IkRfSKu6IxlLzY',
      plus_code: {
        compound_code: 'MJ4J+JW Toronto, ON, Canada',
        global_code: '87M2MJ4J+JW',
      },
      rating: 3.5,
      reference: 'ChIJbR7ZEjjL1IkRfSKu6IxlLzY',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 6,
      vicinity: '230 Shuter Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.65376999999999,
          lng: -79.36694399999999,
        },
        viewport: {
          northeast: {
            lat: 43.6551678802915,
            lng: -79.36561656970849,
          },
          southwest: {
            lat: 43.6524699197085,
            lng: -79.3683145302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      name: 'Envision',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 1068,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/112583853317674536649">Envision</a>',
          ],
          photo_reference:
            'ATtYBwJZGJ0N1CgV-LoaVLdrPy0osPPN7vWSDB0rOVrXMTtPsyD-IXG7EQvmg78yuyM_FWKP1ofWjnj6rGHvZjPaYmjKRNMNQAFbqACe-Hb-spLNH-Rz6dilCKVy-VN7I2plpA1nLpSiuEI5OmhOWPcdv_29G5tbkO9-uWvORiDaX4FeNfxD',
          width: 1800,
        },
      ],
      place_id: 'ChIJm1mWITrL1IkRPsKNqITsgz8',
      plus_code: {
        compound_code: 'MJ3M+G6 Toronto, ON, Canada',
        global_code: '87M2MJ3M+G6',
      },
      rating: 5,
      reference: 'ChIJm1mWITrL1IkRPsKNqITsgz8',
      scope: 'GOOGLE',
      types: ['point_of_interest', 'establishment'],
      user_ratings_total: 1,
      vicinity: '411 Richmond Street East Unit 101, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.650898,
          lng: -79.36924739999999,
        },
        viewport: {
          northeast: {
            lat: 43.6523138302915,
            lng: -79.36792656970849,
          },
          southwest: {
            lat: 43.64961586970851,
            lng: -79.37062453029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      name: "The Chefs' House",
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/109928915367342737550">The Chefs&#39; House</a>',
          ],
          photo_reference:
            'ATtYBwJj3lrcOwv24KByLOFfN2mKTIH9tyoxcnviwgzzjd1dsvo7f7yOv_T467fhBl2U304jiu1buu_apxmuRiykD6HrJrqaz5bYQ8svlOKP2fMyRDheoeazf-izzs49Z0aMZo8OZU3BNfiQpFrxQfU5LtY_QgGwYy_T6KbwqjJLoJYAcNTh',
          width: 4032,
        },
      ],
      place_id: 'ChIJpckInTDL1IkRZip8eYGdzu8',
      plus_code: {
        compound_code: 'MJ2J+98 Toronto, ON, Canada',
        global_code: '87M2MJ2J+98',
      },
      price_level: 2,
      rating: 4.6,
      reference: 'ChIJpckInTDL1IkRZip8eYGdzu8',
      scope: 'GOOGLE',
      types: [
        'meal_takeaway',
        'cafe',
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 277,
      vicinity: '215 King Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6505485,
          lng: -79.3595254,
        },
        viewport: {
          northeast: {
            lat: 43.6520282802915,
            lng: -79.35824566970851,
          },
          southwest: {
            lat: 43.6493303197085,
            lng: -79.36094363029152,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      name: 'Brick Street Bakery',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114004844589499485440">David Sharp</a>',
          ],
          photo_reference:
            'ATtYBwJhJKTAV2QelkCBPk8r4J2KtNzPszXNCZUdRoUkSMipse8K1RMQ7xiBDer-nbOwxZVCVOBp-1Za1X4G5E7OuotWcIPvNBeAFvYneFU4caqCf4pHozzt7X9QC9g6O3xkMIwH32QdsUweCDziMa6vpgog8KQa7kjUVo0sdABBJlhSLjLc',
          width: 4032,
        },
      ],
      place_id: 'ChIJv1iSxz3L1IkRFMzOYoukdzQ',
      plus_code: {
        compound_code: 'MJ2R+65 Toronto, ON, Canada',
        global_code: '87M2MJ2R+65',
      },
      price_level: 2,
      rating: 4.3,
      reference: 'ChIJv1iSxz3L1IkRFMzOYoukdzQ',
      scope: 'GOOGLE',
      types: ['bakery', 'food', 'point_of_interest', 'store', 'establishment'],
      user_ratings_total: 255,
      vicinity: '27 Trinity Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6518323,
          lng: -79.36312989999999,
        },
        viewport: {
          northeast: {
            lat: 43.6532527802915,
            lng: -79.36166451970848,
          },
          southwest: {
            lat: 43.6505548197085,
            lng: -79.3643624802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      name: 'Porsche Centre Downtown Toronto',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3986,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/103198846090865320687">Porsche Centre Downtown Toronto</a>',
          ],
          photo_reference:
            'ATtYBwKT2oChOkcVyF03vqDKppTe_fDiOqcCjjaK4wp1VsdVdhpn5pJ1hR2IVp_AdzfWt48fau6G69GuBIULotUPCQNJEkTrh_dpIBwqmRlPGcfgfrU_SOsCdCQogzWznxTtzgKMSvoGhGpVBK5NamLRSEDbML1UEtAyxXIBYRWswRWwxrxE',
          width: 5979,
        },
      ],
      place_id: 'ChIJt1pm9DvL1IkROLTSVrXbupE',
      plus_code: {
        compound_code: 'MJ2P+PP Toronto, ON, Canada',
        global_code: '87M2MJ2P+PP',
      },
      rating: 4.5,
      reference: 'ChIJt1pm9DvL1IkROLTSVrXbupE',
      scope: 'GOOGLE',
      types: [
        'finance',
        'car_dealer',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 338,
      vicinity: '68 Parliament Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.651772,
          lng: -79.36361529999999,
        },
        viewport: {
          northeast: {
            lat: 43.65308338029151,
            lng: -79.36243151970848,
          },
          southwest: {
            lat: 43.65038541970851,
            lng: -79.36512948029149,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      name: 'Staples',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 1430,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114842505477372159901">Chen Shaowei</a>',
          ],
          photo_reference:
            'ATtYBwIhpMNPOvzxvta4okzPBYwdaCKbsymQpPtQ9k0PdsXNalMBdVnEx_jFGyiBXQvCqJ5TrRpE1_KZapE2MaslW2iXqldYrylId1Qwbk0wrMMkFdIHgXse7gE-25O2jUKzak7sdGga9ciBVwUFzgDGwMxiBM366CGNicfJ2AxU5ow66rLs',
          width: 1928,
        },
      ],
      place_id: 'ChIJ1b8cBjzL1IkRtRsf8cqCNvk',
      plus_code: {
        compound_code: 'MJ2P+PH Toronto, ON, Canada',
        global_code: '87M2MJ2P+PH',
      },
      price_level: 2,
      rating: 4,
      reference: 'ChIJ1b8cBjzL1IkRtRsf8cqCNvk',
      scope: 'GOOGLE',
      types: [
        'electronics_store',
        'furniture_store',
        'home_goods_store',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 450,
      vicinity: '250 Front Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6575241,
          lng: -79.3527502,
        },
        viewport: {
          northeast: {
            lat: 43.6588377302915,
            lng: -79.35147156970851,
          },
          southwest: {
            lat: 43.6561397697085,
            lng: -79.35416953029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      name: 'Downtown Toyota Toronto',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3399,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/108701095970811235335">Downtown Toyota Toronto</a>',
          ],
          photo_reference:
            'ATtYBwINuO5eYOYCs3sHwe8fnAdgh5_ZqCMXECpYxtPGPrkE-Ag85xpYikvOp9Q73CWbxYpYKZzwcYhXlCS-sEtx5Xsx7_9gWXEuzsg70x-h1y_D89MpzAYD8snn0yoRBLU2UcT58XP4pepnGG8TTCQBptPiH8-SQf0pgLKmcPVg62L-TXQ',
          width: 5737,
        },
      ],
      place_id: 'ChIJhayuZGzL1IkR-sKEeO8JwHM',
      plus_code: {
        compound_code: 'MJ5W+2V Toronto, ON, Canada',
        global_code: '87M2MJ5W+2V',
      },
      rating: 4.5,
      reference: 'ChIJhayuZGzL1IkR-sKEeO8JwHM',
      scope: 'GOOGLE',
      types: [
        'car_dealer',
        'car_repair',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 886,
      vicinity: '77 East Don Roadway, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.65154779999999,
          lng: -79.36751249999999,
        },
        viewport: {
          northeast: {
            lat: 43.65285223029149,
            lng: -79.36612476970849,
          },
          southwest: {
            lat: 43.6501542697085,
            lng: -79.3688227302915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png',
      name: "Betty's",
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102721340282104834885">Tomáš Kořínek</a>',
          ],
          photo_reference:
            'ATtYBwInE3rdK6jwglRr5DFizt62cI_AFvW3gUOrmlrzTxJV7O-8euW3VdM8yFERKGmBOxeaPosHCNTmWd5mJ3xjGjl4ead-_BXnAgEzIxvBV6nKmz1hy0ghX4a1q33gRrCVb4In0U528oH5_8K4BBikPaY8LKh2RFXrJtdZmDsQ5-vnPOrO',
          width: 4032,
        },
      ],
      place_id: 'ChIJ2W7ZPjrL1IkRFiKnFvl1rLI',
      plus_code: {
        compound_code: 'MJ2J+JX Toronto, ON, Canada',
        global_code: '87M2MJ2J+JX',
      },
      price_level: 2,
      rating: 4.3,
      reference: 'ChIJ2W7ZPjrL1IkRFiKnFvl1rLI',
      scope: 'GOOGLE',
      types: [
        'bar',
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 1691,
      vicinity: '240 King Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.65330360000001,
          lng: -79.36883460000001,
        },
        viewport: {
          northeast: {
            lat: 43.6547279302915,
            lng: -79.36744896970852,
          },
          southwest: {
            lat: 43.65202996970851,
            lng: -79.37014693029153,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      name: 'Tim Hortons',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 1350,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/113036725207736941957">Chuan Chee</a>',
          ],
          photo_reference:
            'ATtYBwKuoJrj5MZsWIfXN1VjtAm9p2iOzvHBYPWITcddDJUCvXs2_TYIeraety3Xn4EzxDcAv2C-edpy_KzjOH2-3IkSgOZEBhl9ESx07PSf8UAjLE2APle2mdLaw-sXJystHGdwLXN2Mooj6dGuML27Oou0QSlM9n5MX7lPtoRe7pHhClkw',
          width: 1080,
        },
      ],
      place_id: 'ChIJvfad4jnL1IkRt2xD1IWWFfA',
      plus_code: {
        compound_code: 'MJ3J+8F Toronto, ON, Canada',
        global_code: '87M2MJ3J+8F',
      },
      price_level: 1,
      rating: 3.6,
      reference: 'ChIJvfad4jnL1IkRt2xD1IWWFfA',
      scope: 'GOOGLE',
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
      user_ratings_total: 539,
      vicinity: '323 Richmond Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.65333979999999,
          lng: -79.36444659999999,
        },
        viewport: {
          northeast: {
            lat: 43.6546062802915,
            lng: -79.36298021970849,
          },
          southwest: {
            lat: 43.6519083197085,
            lng: -79.36567818029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      name: 'Volkswagen Downtown Toronto',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 843,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/118114700624860015299">Volkswagen Downtown Toronto</a>',
          ],
          photo_reference:
            'ATtYBwJSMfcxu-ViLc07rEqeHCpUjXYPe9WmrzP3uCumhlLFanndTW0wSn0zhMPZJ4bxi_1EHzOcCatyEcDx-IGwRkfl-0EMEDlDzUbM0u00st9JNP_il__Z7a_d8l96LBANceTQikmqvCrhCMYDM20TDY18yNDaW5SXUFz2_CrqrhNFXS0K',
          width: 1500,
        },
      ],
      place_id: 'ChIJq0FoSDnL1IkRnS_DHhhjlMU',
      plus_code: {
        compound_code: 'MJ3P+86 Toronto, ON, Canada',
        global_code: '87M2MJ3P+86',
      },
      rating: 4.3,
      reference: 'ChIJq0FoSDnL1IkRnS_DHhhjlMU',
      scope: 'GOOGLE',
      types: ['car_dealer', 'point_of_interest', 'store', 'establishment'],
      user_ratings_total: 557,
      vicinity: '550 Adelaide Street East, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6532949,
          lng: -79.37292830000001,
        },
        viewport: {
          northeast: {
            lat: 43.6546229302915,
            lng: -79.37163091970848,
          },
          southwest: {
            lat: 43.6519249697085,
            lng: -79.3743288802915,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'Saint Lawrence Residences and Suites',
      photos: [
        {
          height: 1536,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/116208539123598810032">Saint Lawrence Residences and Suites</a>',
          ],
          photo_reference:
            'ATtYBwJwtOzXtMybjqUwZsQoRBKDmeUFgv4JEjqJO8IcptsVEsVO67rplNFB5NLi7MOPwMduWPYFeuLklNyMYQLzpclrZ0_sCoT0l6OvzKGmIYj79A1GigfVVIcZqojmRz_CWPpRsYww244l3OZl2qoM2vIKBlg1HU73P0BPgdZe7PxLvmmr',
          width: 2048,
        },
      ],
      place_id: 'ChIJC7ISzDbL1IkRF-gDkN8docE',
      plus_code: {
        compound_code: 'MJ3G+8R Toronto, ON, Canada',
        global_code: '87M2MJ3G+8R',
      },
      rating: 2.3,
      reference: 'ChIJC7ISzDbL1IkRF-gDkN8docE',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 107,
      vicinity: '135 Jarvis Street, Toronto',
    },
    {
      business_status: 'OPERATIONAL',
      geometry: {
        location: {
          lat: 43.6533333,
          lng: -79.3744444,
        },
        viewport: {
          northeast: {
            lat: 43.6547485802915,
            lng: -79.37312256970849,
          },
          southwest: {
            lat: 43.6520506197085,
            lng: -79.37582053029151,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      name: 'The Ivy At Verity - Boutique Hotel Toronto',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 1365,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106188344856892833563">The Ivy At Verity - Boutique Hotel Toronto</a>',
          ],
          photo_reference:
            'ATtYBwKh6pU8tMcVu6Iso2xZbvT_cCUT7alkKOsMAmldtJWVWHVutuBqBWuKqozutIsezB6oPbV58OyS6VmNFI0NHcr0pCIaAH-fpL12rTB5YfEq8LvJCY_3xN7GwO3rThHIVimMwKzN2Y1avN8XicC3HTtaLIuZ7CpqpqUp6Kaz7FlBIzPh',
          width: 2048,
        },
      ],
      place_id: 'ChIJMbvGqzbL1IkRjqFPAz9B6aI',
      plus_code: {
        compound_code: 'MJ3G+86 Toronto, ON, Canada',
        global_code: '87M2MJ3G+86',
      },
      rating: 4.9,
      reference: 'ChIJMbvGqzbL1IkRjqFPAz9B6aI',
      scope: 'GOOGLE',
      types: ['lodging', 'point_of_interest', 'establishment'],
      user_ratings_total: 34,
      vicinity: '111 Queen Street East unit d, Toronto',
    },
    {
      geometry: {
        location: {
          lat: 43.6548046,
          lng: -79.3883031,
        },
        viewport: {
          northeast: {
            lat: 43.67558329314602,
            lng: -79.34701763479644,
          },
          southwest: {
            lat: 43.63393275040352,
            lng: -79.41131706622495,
          },
        },
      },
      icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
      name: 'Downtown Toronto',
      photos: [
        {
          height: 4395,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/115679026526117328679">David Tang</a>',
          ],
          photo_reference:
            'ATtYBwK-EJdbo3xnjpYVtQ10TKS9wLuSNTdxcCSh24DYxOCiTSlI_mJukO1kMGV7Q5FHYH6c9-qcccODMc853C2DQ8YGTzTf5lntd58W_7gj5StipOOcNlsdMqDqawnPBmn30k-JbWIFM22dspxGWj0RtpC1alsaAly2aU0wzkoq_ECvtzVm',
          width: 2953,
        },
      ],
      place_id: 'ChIJvRBz0jTL1IkRkwMHIgbSFbo',
      reference: 'ChIJvRBz0jTL1IkRkwMHIgbSFbo',
      scope: 'GOOGLE',
      types: ['neighborhood', 'political'],
      vicinity: 'Old Toronto',
    },
  ],
  status: 'OK',
};
