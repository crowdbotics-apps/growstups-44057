import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_13_33}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6648e872-156d-454f-9954-194cca05d837"
          }}
          style={styles.ImageBackground_12_10}
        />
        <View style={styles.View_12_8} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/307987e7-3762-49f1-91dd-f5907e74283b"
          }}
          style={styles.ImageBackground_12_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a85aded-beda-4a5a-898f-05765a36c8ef"
          }}
          style={styles.ImageBackground_12_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7942bfd-0a5e-4774-ac96-53b1ce9bdd4f"
          }}
          style={styles.ImageBackground_12_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bdd376f-b616-474c-8ff6-97607b33df78"
          }}
          style={styles.ImageBackground_12_14}
        />
        <View style={styles.View_12_15}>
          <Text style={styles.Text_12_15}>Email</Text>
        </View>
        <View style={styles.View_12_16}>
          <Text style={styles.Text_12_16}>Password</Text>
        </View>
        <View style={styles.View_12_17} />
        <View style={styles.View_12_19}>
          <Text style={styles.Text_12_19}>Forgot Password ?</Text>
        </View>
        <View style={styles.View_12_20}>
          <Text style={styles.Text_12_20}>SIGN IN</Text>
        </View>
        <View style={styles.View_12_21} />
        <View style={styles.View_13_137}>
          <View style={styles.View_13_136}>
            <View style={styles.View_13_135}>
              <View style={styles.View_13_134}>
                <View style={styles.View_13_133}>
                  <View style={styles.View_13_132}>
                    <View style={styles.View_13_131}>
                      <View style={styles.View_13_130}>
                        <View style={styles.View_13_129}>
                          <View style={styles.View_13_128}>
                            <View style={styles.View_13_127}>
                              <View style={styles.View_13_126}>
                                <View style={styles.View_13_125}>
                                  <View style={styles.View_13_124}>
                                    <View style={styles.View_13_123}>
                                      <View style={styles.View_13_122}>
                                        <View style={styles.View_13_121}>
                                          <View style={styles.View_13_120}>
                                            <View style={styles.View_13_119}>
                                              <View style={styles.View_13_118}>
                                                <View
                                                  style={styles.View_13_117}
                                                >
                                                  <View
                                                    style={styles.View_13_116}
                                                  >
                                                    <View
                                                      style={styles.View_13_115}
                                                    >
                                                      <View
                                                        style={
                                                          styles.View_13_114
                                                        }
                                                      >
                                                        <View
                                                          style={
                                                            styles.View_13_113
                                                          }
                                                        >
                                                          <View
                                                            style={
                                                              styles.View_13_112
                                                            }
                                                          >
                                                            <View
                                                              style={
                                                                styles.View_13_111
                                                              }
                                                            >
                                                              <View
                                                                style={
                                                                  styles.View_13_110
                                                                }
                                                              >
                                                                <View
                                                                  style={
                                                                    styles.View_13_109
                                                                  }
                                                                >
                                                                  <View
                                                                    style={
                                                                      styles.View_13_108
                                                                    }
                                                                  >
                                                                    <View
                                                                      style={
                                                                        styles.View_13_107
                                                                      }
                                                                    >
                                                                      <View
                                                                        style={
                                                                          styles.View_13_106
                                                                        }
                                                                      >
                                                                        <View
                                                                          style={
                                                                            styles.View_13_105
                                                                          }
                                                                        >
                                                                          <View
                                                                            style={
                                                                              styles.View_13_104
                                                                            }
                                                                          >
                                                                            <View
                                                                              style={
                                                                                styles.View_13_103
                                                                              }
                                                                            >
                                                                              <View
                                                                                style={
                                                                                  styles.View_13_102
                                                                                }
                                                                              >
                                                                                <View
                                                                                  style={
                                                                                    styles.View_13_101
                                                                                  }
                                                                                >
                                                                                  <View
                                                                                    style={
                                                                                      styles.View_13_100
                                                                                    }
                                                                                  >
                                                                                    <View
                                                                                      style={
                                                                                        styles.View_13_99
                                                                                      }
                                                                                    >
                                                                                      <View
                                                                                        style={
                                                                                          styles.View_13_98
                                                                                        }
                                                                                      >
                                                                                        <View
                                                                                          style={
                                                                                            styles.View_13_97
                                                                                          }
                                                                                        >
                                                                                          <View
                                                                                            style={
                                                                                              styles.View_13_96
                                                                                            }
                                                                                          >
                                                                                            <View
                                                                                              style={
                                                                                                styles.View_13_95
                                                                                              }
                                                                                            >
                                                                                              <View
                                                                                                style={
                                                                                                  styles.View_13_94
                                                                                                }
                                                                                              >
                                                                                                <View
                                                                                                  style={
                                                                                                    styles.View_13_93
                                                                                                  }
                                                                                                >
                                                                                                  <View
                                                                                                    style={
                                                                                                      styles.View_13_92
                                                                                                    }
                                                                                                  >
                                                                                                    <View
                                                                                                      style={
                                                                                                        styles.View_13_91
                                                                                                      }
                                                                                                    >
                                                                                                      <View
                                                                                                        style={
                                                                                                          styles.View_13_90
                                                                                                        }
                                                                                                      >
                                                                                                        <View
                                                                                                          style={
                                                                                                            styles.View_13_89
                                                                                                          }
                                                                                                        >
                                                                                                          <View
                                                                                                            style={
                                                                                                              styles.View_13_88
                                                                                                            }
                                                                                                          >
                                                                                                            <View
                                                                                                              style={
                                                                                                                styles.View_13_87
                                                                                                              }
                                                                                                            >
                                                                                                              <View
                                                                                                                style={
                                                                                                                  styles.View_13_86
                                                                                                                }
                                                                                                              >
                                                                                                                <View
                                                                                                                  style={
                                                                                                                    styles.View_13_85
                                                                                                                  }
                                                                                                                >
                                                                                                                  <View
                                                                                                                    style={
                                                                                                                      styles.View_13_84
                                                                                                                    }
                                                                                                                  >
                                                                                                                    <View
                                                                                                                      style={
                                                                                                                        styles.View_13_83
                                                                                                                      }
                                                                                                                    >
                                                                                                                      <View
                                                                                                                        style={
                                                                                                                          styles.View_13_82
                                                                                                                        }
                                                                                                                      >
                                                                                                                        <View
                                                                                                                          style={
                                                                                                                            styles.View_13_81
                                                                                                                          }
                                                                                                                        >
                                                                                                                          <View
                                                                                                                            style={
                                                                                                                              styles.View_13_80
                                                                                                                            }
                                                                                                                          >
                                                                                                                            <View
                                                                                                                              style={
                                                                                                                                styles.View_13_79
                                                                                                                              }
                                                                                                                            >
                                                                                                                              <View
                                                                                                                                style={
                                                                                                                                  styles.View_13_78
                                                                                                                                }
                                                                                                                              >
                                                                                                                                <View
                                                                                                                                  style={
                                                                                                                                    styles.View_13_77
                                                                                                                                  }
                                                                                                                                >
                                                                                                                                  <View
                                                                                                                                    style={
                                                                                                                                      styles.View_13_76
                                                                                                                                    }
                                                                                                                                  >
                                                                                                                                    <View
                                                                                                                                      style={
                                                                                                                                        styles.View_13_75
                                                                                                                                      }
                                                                                                                                    >
                                                                                                                                      <View
                                                                                                                                        style={
                                                                                                                                          styles.View_13_74
                                                                                                                                        }
                                                                                                                                      >
                                                                                                                                        <View
                                                                                                                                          style={
                                                                                                                                            styles.View_13_73
                                                                                                                                          }
                                                                                                                                        >
                                                                                                                                          <View
                                                                                                                                            style={
                                                                                                                                              styles.View_13_72
                                                                                                                                            }
                                                                                                                                          >
                                                                                                                                            <View
                                                                                                                                              style={
                                                                                                                                                styles.View_13_71
                                                                                                                                              }
                                                                                                                                            >
                                                                                                                                              <View
                                                                                                                                                style={
                                                                                                                                                  styles.View_13_70
                                                                                                                                                }
                                                                                                                                              >
                                                                                                                                                <View
                                                                                                                                                  style={
                                                                                                                                                    styles.View_13_69
                                                                                                                                                  }
                                                                                                                                                >
                                                                                                                                                  <View
                                                                                                                                                    style={
                                                                                                                                                      styles.View_13_68
                                                                                                                                                    }
                                                                                                                                                  >
                                                                                                                                                    <View
                                                                                                                                                      style={
                                                                                                                                                        styles.View_13_67
                                                                                                                                                      }
                                                                                                                                                    >
                                                                                                                                                      <View
                                                                                                                                                        style={
                                                                                                                                                          styles.View_13_66
                                                                                                                                                        }
                                                                                                                                                      >
                                                                                                                                                        <View
                                                                                                                                                          style={
                                                                                                                                                            styles.View_13_65
                                                                                                                                                          }
                                                                                                                                                        >
                                                                                                                                                          <View
                                                                                                                                                            style={
                                                                                                                                                              styles.View_13_64
                                                                                                                                                            }
                                                                                                                                                          >
                                                                                                                                                            <View
                                                                                                                                                              style={
                                                                                                                                                                styles.View_13_63
                                                                                                                                                              }
                                                                                                                                                            >
                                                                                                                                                              <View
                                                                                                                                                                style={
                                                                                                                                                                  styles.View_13_62
                                                                                                                                                                }
                                                                                                                                                              >
                                                                                                                                                                <View
                                                                                                                                                                  style={
                                                                                                                                                                    styles.View_13_60
                                                                                                                                                                  }
                                                                                                                                                                >
                                                                                                                                                                  <View
                                                                                                                                                                    style={
                                                                                                                                                                      styles.View_12_22
                                                                                                                                                                    }
                                                                                                                                                                  />
                                                                                                                                                                </View>
                                                                                                                                                              </View>
                                                                                                                                                            </View>
                                                                                                                                                          </View>
                                                                                                                                                        </View>
                                                                                                                                                      </View>
                                                                                                                                                    </View>
                                                                                                                                                  </View>
                                                                                                                                                </View>
                                                                                                                                              </View>
                                                                                                                                            </View>
                                                                                                                                          </View>
                                                                                                                                        </View>
                                                                                                                                      </View>
                                                                                                                                    </View>
                                                                                                                                  </View>
                                                                                                                                </View>
                                                                                                                              </View>
                                                                                                                            </View>
                                                                                                                          </View>
                                                                                                                        </View>
                                                                                                                      </View>
                                                                                                                    </View>
                                                                                                                  </View>
                                                                                                                </View>
                                                                                                              </View>
                                                                                                            </View>
                                                                                                          </View>
                                                                                                        </View>
                                                                                                      </View>
                                                                                                    </View>
                                                                                                  </View>
                                                                                                </View>
                                                                                              </View>
                                                                                            </View>
                                                                                          </View>
                                                                                        </View>
                                                                                      </View>
                                                                                    </View>
                                                                                  </View>
                                                                                </View>
                                                                              </View>
                                                                            </View>
                                                                          </View>
                                                                        </View>
                                                                      </View>
                                                                    </View>
                                                                  </View>
                                                                </View>
                                                              </View>
                                                            </View>
                                                          </View>
                                                        </View>
                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_12_23}>
          <View style={styles.View_12_24}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac61170c-31cf-414c-af6f-189f8534c320"
              }}
              style={styles.ImageBackground_12_25}
            />
            <View source={{ uri: "null" }} style={styles.View_12_28} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f10163e0-25ee-4c87-a114-37d79090ca03"
          }}
          style={styles.ImageBackground_12_29}
        />
        <View style={styles.View_12_31}>
          <Text style={styles.Text_12_31}>Don’t have an account? </Text>
        </View>
        <View style={styles.View_12_32}>
          <Text style={styles.Text_12_32}>SIGN UP</Text>
        </View>
        <View style={styles.View_12_18}>
          <Text style={styles.Text_12_18}>Welcome Back Investor ! </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_13_287}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("13_278"))
          }
        >
          <View style={styles.View_I13_287_13_266} />
        </TouchableOpacity>
        <View style={styles.View_16_291}>
          <Text style={styles.Text_16_291}>I accept terms and conditions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e111caec-d193-4060-b51a-309061eb1a2b"
          }}
          style={styles.ImageBackground_20_650}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_13_33: {
    width: wp("193%"),
    minWidth: wp("193%"),
    height: hp("142%"),
    minHeight: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-36%"),
    top: hp("-15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_12_10: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("9%")
  },
  View_12_8: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("133%"),
    backgroundColor: "rgba(0, 81, 239, 1)"
  },
  ImageBackground_12_9: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_12_11: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_12_13: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("78%")
  },
  ImageBackground_12_14: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("91%")
  },
  View_12_15: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_12_15: {
    color: "rgba(105, 103, 103, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_16: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_12_16: {
    color: "rgba(105, 103, 103, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_17: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 81, 239, 1)"
  },
  View_12_19: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_12_19: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_20: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_12_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_21: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("109%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_13_137: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("109%")
  },
  View_13_136: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_135: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_134: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_133: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_132: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_131: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_130: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_129: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_128: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_127: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_126: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_125: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_124: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_123: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_122: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_121: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_120: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_119: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_118: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_117: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_116: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_115: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_114: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_113: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_112: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_111: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_110: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_109: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_108: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_107: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_106: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_105: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_104: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_103: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_102: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_101: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_100: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_99: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_98: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_97: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_96: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_95: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_94: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_93: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_92: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_91: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_90: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_89: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_88: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_87: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_86: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_85: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_84: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_83: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_82: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_81: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_80: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_79: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_78: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_77: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_76: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_75: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_74: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_73: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_72: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_71: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_70: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_69: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_68: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_67: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_66: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_65: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_64: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_63: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_62: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_60: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_12_22: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_12_23: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_24: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_12_25: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_12_28: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_12_29: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%")
  },
  View_12_31: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("136%"),
    justifyContent: "flex-start"
  },
  Text_12_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_32: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102%"),
    top: hp("136%"),
    justifyContent: "flex-start"
  },
  Text_12_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_18: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_12_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_287: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_287_13_266: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_16_291: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("123%"),
    justifyContent: "flex-start"
  },
  Text_16_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_650: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("18%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
