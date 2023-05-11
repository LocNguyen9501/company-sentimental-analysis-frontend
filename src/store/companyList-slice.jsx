import { createSlice} from "@reduxjs/toolkit";
import snap from "../assets/snap2.png"
import aws from "../assets/aws.png"
import roku from "../assets/roku.png"
import dropbox from "../assets/dropbox.png"
import mongoDB from "../assets/mongoDB.png"
import OCI from "../assets/OCI.png"
import SVN from "../assets/servicenow.png"
import SNFLK from "../assets/snflk.png"
import paypal from "../assets/payapl.png"
import microsoft from "../assets/microsoft.png"

const initialState = [
  {
    "companyName": "dropbox",
    "companyimage":dropbox,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.21782194018702616
        },
        {
          "name": "Neutral",
          "percent": 0.4984176335009662
        },
        {
          "name": "Negative",
          "percent": 0.28376042885197833
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.21782194018702616
        },
        {
          "name": "Neutral",
          "percent": 0.4984176335009662
        },
        {
          "name": "Negative",
          "percent": 0.28376042885197833
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.21782194018702616
        },
        {
          "name": "Neutral",
          "percent": 0.4984176335009662
        },
        {
          "name": "Negative",
          "percent": 0.28376042885197833
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.19265449903018417
        },
        {
          "name": "Neutral",
          "percent": 0.5973487918575605
        },
        {
          "name": "Negative",
          "percent": 0.20999670831397885
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.20395788653359676
        },
        {
          "name": "Neutral",
          "percent": 0.5982006297518427
        },
        {
          "name": "Negative",
          "percent": 0.19784148071462718
        }
      ]
    },
    "normalize": 0.5030582029094848
  },
  {
    "companyName": "snap",
    "companyimage":snap,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.17387143625981277
        },
        {
          "name": "Neutral",
          "percent": 0.6628918912675645
        },
        {
          "name": "Negative",
          "percent": 0.1632366840624147
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.17387143625981277
        },
        {
          "name": "Neutral",
          "percent": 0.6628918912675645
        },
        {
          "name": "Negative",
          "percent": 0.1632366840624147
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.1592182217165828
        },
        {
          "name": "Neutral",
          "percent": 0.636473760008812
        },
        {
          "name": "Negative",
          "percent": 0.20430802684277297
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.2249499593833179
        },
        {
          "name": "Neutral",
          "percent": 0.5867829319428314
        },
        {
          "name": "Negative",
          "percent": 0.1882671025567547
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.22419823710199283
        },
        {
          "name": "Neutral",
          "percent": 0.6231666263192892
        },
        {
          "name": "Negative",
          "percent": 0.15263513355698113
        }
      ]
    },
    "normalize": 0.5357815517725059
  },
  {
    "companyName": "aws",
    "companyimage":aws,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.2920357426867271
        },
        {
          "name": "Neutral",
          "percent": 0.5591789065645292
        },
        {
          "name": "Negative",
          "percent": 0.1487853410355269
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.2920357426867271
        },
        {
          "name": "Neutral",
          "percent": 0.5591789065645292
        },
        {
          "name": "Negative",
          "percent": 0.1487853410355269
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.29846317325496957
        },
        {
          "name": "Neutral",
          "percent": 0.5615080312958786
        },
        {
          "name": "Negative",
          "percent": 0.14002878818150966
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.2778566288595487
        },
        {
          "name": "Neutral",
          "percent": 0.5563875517940947
        },
        {
          "name": "Negative",
          "percent": 0.1657558156813528
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.27719919520637226
        },
        {
          "name": "Neutral",
          "percent": 0.5651653672258059
        },
        {
          "name": "Negative",
          "percent": 0.1576354378213485
        }
      ]
    },
    "normalize": 0.5597818786925118
  },
  {
    "companyName": "roku",
    "companyimage":roku,
    "rating": {
      "year": [
        {
          "name": "Positive",
          "percent": 0.4606267586350441
        },
        {
          "name": "Neutral",
          "percent": 0.31969114020466805
        },
        {
          "name": "Negative",
          "percent": 0.2196821365505457
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.31479646265506744
        },
        {
          "name": "Neutral",
          "percent": 0.4833385869860649
        },
        {
          "name": "Negative",
          "percent": 0.20186497395237288
        }
      ]
    },
    "normalize": 0.5564657443513473
  },
  {
    "companyName": "mongodb",
    "companyimage":mongoDB,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.3306640857209762
        },
        {
          "name": "Neutral",
          "percent": 0.5349642783403397
        },
        {
          "name": "Negative",
          "percent": 0.1343716392914454
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.3306640857209762
        },
        {
          "name": "Neutral",
          "percent": 0.5349642783403397
        },
        {
          "name": "Negative",
          "percent": 0.1343716392914454
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.3306640857209762
        },
        {
          "name": "Neutral",
          "percent": 0.5349642783403397
        },
        {
          "name": "Negative",
          "percent": 0.1343716392914454
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.416292192234147
        },
        {
          "name": "Neutral",
          "percent": 0.47817354799518663
        },
        {
          "name": "Negative",
          "percent": 0.1055342650807072
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.4252797147597779
        },
        {
          "name": "Neutral",
          "percent": 0.4778546923348172
        },
        {
          "name": "Negative",
          "percent": 0.09686559450346977
        }
      ]
    },
    "normalize": 0.6642070601281541
  },
  {
    "companyName": "oci",
    "companyimage":OCI,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.2725347042238961
        },
        {
          "name": "Neutral",
          "percent": 0.5211119006077448
        },
        {
          "name": "Negative",
          "percent": 0.20635339307288328
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.2725347042238961
        },
        {
          "name": "Neutral",
          "percent": 0.5211119006077448
        },
        {
          "name": "Negative",
          "percent": 0.20635339307288328
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.2725347042238961
        },
        {
          "name": "Neutral",
          "percent": 0.5211119006077448
        },
        {
          "name": "Negative",
          "percent": 0.20635339307288328
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.23585688738551522
        },
        {
          "name": "Neutral",
          "percent": 0.6582382257495608
        },
        {
          "name": "Negative",
          "percent": 0.10590488756341594
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.2430809139540153
        },
        {
          "name": "Neutral",
          "percent": 0.6628149095035735
        },
        {
          "name": "Negative",
          "percent": 0.09410417550021694
        }
      ]
    },
    "normalize": 0.5744883692268992
  },
  {
    "companyName": "servicenow",
    "companyimage":SVN,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.4645332874730229
        },
        {
          "name": "Neutral",
          "percent": 0.46361076459288597
        },
        {
          "name": "Negative",
          "percent": 0.07185592451132834
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.4645332874730229
        },
        {
          "name": "Neutral",
          "percent": 0.46361076459288597
        },
        {
          "name": "Negative",
          "percent": 0.07185592451132834
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.4645332874730229
        },
        {
          "name": "Neutral",
          "percent": 0.46361076459288597
        },
        {
          "name": "Negative",
          "percent": 0.07185592451132834
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.3604464364082863
        },
        {
          "name": "Neutral",
          "percent": 0.565599420418342
        },
        {
          "name": "Negative",
          "percent": 0.0739541343646124
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.33070745646696664
        },
        {
          "name": "Neutral",
          "percent": 0.5858555004514497
        },
        {
          "name": "Negative",
          "percent": 0.08343703335086847
        }
      ]
    },
    "normalize": 0.6236352115580491
  },
  {
    "companyName": "snowflake",
    "companyImage":SNFLK,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.175069615089645
        },
        {
          "name": "Neutral",
          "percent": 0.6796776031454405
        },
        {
          "name": "Negative",
          "percent": 0.14525278044554094
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.175069615089645
        },
        {
          "name": "Neutral",
          "percent": 0.6796776031454405
        },
        {
          "name": "Negative",
          "percent": 0.14525278044554094
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.175069615089645
        },
        {
          "name": "Neutral",
          "percent": 0.6796776031454405
        },
        {
          "name": "Negative",
          "percent": 0.14525278044554094
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.19531891256984737
        },
        {
          "name": "Neutral",
          "percent": 0.6722631719377306
        },
        {
          "name": "Negative",
          "percent": 0.1324179167341855
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.2230259461869155
        },
        {
          "name": "Neutral",
          "percent": 0.6394775139708673
        },
        {
          "name": "Negative",
          "percent": 0.13749654032289982
        }
      ]
    },
    "normalize": 0.5427647029320078
  },
  {
    "companyName": "paypal",
    "companyimage":paypal,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.11379128211939876
        },
        {
          "name": "Neutral",
          "percent": 0.6269709704951807
        },
        {
          "name": "Negative",
          "percent": 0.2592377566880631
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.11379128211939876
        },
        {
          "name": "Neutral",
          "percent": 0.6269709704951807
        },
        {
          "name": "Negative",
          "percent": 0.2592377566880631
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.11379128211939876
        },
        {
          "name": "Neutral",
          "percent": 0.6269709704951807
        },
        {
          "name": "Negative",
          "percent": 0.2592377566880631
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.20677021590086656
        },
        {
          "name": "Neutral",
          "percent": 0.5579704465847966
        },
        {
          "name": "Negative",
          "percent": 0.23525934478242858
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.2156703428072096
        },
        {
          "name": "Neutral",
          "percent": 0.5697694850430168
        },
        {
          "name": "Negative",
          "percent": 0.21456017437891137
        }
      ]
    },
    "normalize": 0.5005550842141491
  },
  {
    "companyName": "microsoft",
    "companyimage":microsoft,
    "rating": {
      "day": [
        {
          "name": "Positive",
          "percent": 0.2165975984797388
        },
        {
          "name": "Neutral",
          "percent": 0.5559795692104486
        },
        {
          "name": "Negative",
          "percent": 0.2274228332342416
        }
      ],
      "week": [
        {
          "name": "Positive",
          "percent": 0.21367968335433898
        },
        {
          "name": "Neutral",
          "percent": 0.556957173589012
        },
        {
          "name": "Negative",
          "percent": 0.22936314359886317
        }
      ],
      "month": [
        {
          "name": "Positive",
          "percent": 0.21832121950836844
        },
        {
          "name": "Neutral",
          "percent": 0.555141386993318
        },
        {
          "name": "Negative",
          "percent": 0.22653739433890135
        }
      ],
      "year": [
        {
          "name": "Positive",
          "percent": 0.23717406798754598
        },
        {
          "name": "Neutral",
          "percent": 0.549290812734337
        },
        {
          "name": "Negative",
          "percent": 0.21353511891032584
        }
      ],
      "allTime": [
        {
          "name": "Positive",
          "percent": 0.2426152228899629
        },
        {
          "name": "Neutral",
          "percent": 0.5518134016707489
        },
        {
          "name": "Negative",
          "percent": 0.20557137536603104
        }
      ]
    },
    "normalize": 0.5185219237619659
  }
]

const companyListSlice = createSlice({
    name:"companyDetails",
    initialState,
    reducers:{}
});

export default companyListSlice.reducer;