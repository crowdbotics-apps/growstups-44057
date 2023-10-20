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
      <View style={styles.View_16_293}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf2e3882-2ac4-4fb8-aea3-abf1850b53c6"
          }}
          style={styles.ImageBackground_16_294}
        />
        <View style={styles.View_16_295} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1906ac32-41b4-41cf-bfef-002d3affa041"
          }}
          style={styles.ImageBackground_16_296}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/210a0b8a-3368-4461-a667-090a3a8a0ba0"
          }}
          style={styles.ImageBackground_16_297}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11c2cfc6-e0c9-439e-a186-6ddbbf270279"
          }}
          style={styles.ImageBackground_16_298}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f8d255b-c46c-497e-9c9d-2a36477bae49"
          }}
          style={styles.ImageBackground_16_299}
        />
        <View style={styles.View_16_300}>
          <Text style={styles.Text_16_300}>Email</Text>
        </View>
        <View style={styles.View_16_301}>
          <Text style={styles.Text_16_301}>Password</Text>
        </View>
        <View style={styles.View_16_302} />
        <View style={styles.View_16_303}>
          <Text style={styles.Text_16_303}>Forgot Password ?</Text>
        </View>
        <View style={styles.View_16_304}>
          <Text style={styles.Text_16_304}>SIGN IN</Text>
        </View>
        <View style={styles.View_16_305} />
        <View style={styles.View_16_306}>
          <View style={styles.View_16_307}>
            <View style={styles.View_16_308}>
              <View style={styles.View_16_309}>
                <View style={styles.View_16_310}>
                  <View style={styles.View_16_311}>
                    <View style={styles.View_16_312}>
                      <View style={styles.View_16_313}>
                        <View style={styles.View_16_314}>
                          <View style={styles.View_16_315}>
                            <View style={styles.View_16_316}>
                              <View style={styles.View_16_317}>
                                <View style={styles.View_16_318}>
                                  <View style={styles.View_16_319}>
                                    <View style={styles.View_16_320}>
                                      <View style={styles.View_16_321}>
                                        <View style={styles.View_16_322}>
                                          <View style={styles.View_16_323}>
                                            <View style={styles.View_16_324}>
                                              <View style={styles.View_16_325}>
                                                <View
                                                  style={styles.View_16_326}
                                                >
                                                  <View
                                                    style={styles.View_16_327}
                                                  >
                                                    <View
                                                      style={styles.View_16_328}
                                                    >
                                                      <View
                                                        style={
                                                          styles.View_16_329
                                                        }
                                                      >
                                                        <View
                                                          style={
                                                            styles.View_16_330
                                                          }
                                                        >
                                                          <View
                                                            style={
                                                              styles.View_16_331
                                                            }
                                                          >
                                                            <View
                                                              style={
                                                                styles.View_16_332
                                                              }
                                                            >
                                                              <View
                                                                style={
                                                                  styles.View_16_333
                                                                }
                                                              >
                                                                <View
                                                                  style={
                                                                    styles.View_16_334
                                                                  }
                                                                >
                                                                  <View
                                                                    style={
                                                                      styles.View_16_335
                                                                    }
                                                                  >
                                                                    <View
                                                                      style={
                                                                        styles.View_16_336
                                                                      }
                                                                    >
                                                                      <View
                                                                        style={
                                                                          styles.View_16_337
                                                                        }
                                                                      >
                                                                        <View
                                                                          style={
                                                                            styles.View_16_338
                                                                          }
                                                                        >
                                                                          <View
                                                                            style={
                                                                              styles.View_16_339
                                                                            }
                                                                          >
                                                                            <View
                                                                              style={
                                                                                styles.View_16_340
                                                                              }
                                                                            >
                                                                              <View
                                                                                style={
                                                                                  styles.View_16_341
                                                                                }
                                                                              >
                                                                                <View
                                                                                  style={
                                                                                    styles.View_16_342
                                                                                  }
                                                                                >
                                                                                  <View
                                                                                    style={
                                                                                      styles.View_16_343
                                                                                    }
                                                                                  >
                                                                                    <View
                                                                                      style={
                                                                                        styles.View_16_344
                                                                                      }
                                                                                    >
                                                                                      <View
                                                                                        style={
                                                                                          styles.View_16_345
                                                                                        }
                                                                                      >
                                                                                        <View
                                                                                          style={
                                                                                            styles.View_16_346
                                                                                          }
                                                                                        >
                                                                                          <View
                                                                                            style={
                                                                                              styles.View_16_347
                                                                                            }
                                                                                          >
                                                                                            <View
                                                                                              style={
                                                                                                styles.View_16_348
                                                                                              }
                                                                                            >
                                                                                              <View
                                                                                                style={
                                                                                                  styles.View_16_349
                                                                                                }
                                                                                              >
                                                                                                <View
                                                                                                  style={
                                                                                                    styles.View_16_350
                                                                                                  }
                                                                                                >
                                                                                                  <View
                                                                                                    style={
                                                                                                      styles.View_16_351
                                                                                                    }
                                                                                                  >
                                                                                                    <View
                                                                                                      style={
                                                                                                        styles.View_16_352
                                                                                                      }
                                                                                                    >
                                                                                                      <View
                                                                                                        style={
                                                                                                          styles.View_16_353
                                                                                                        }
                                                                                                      >
                                                                                                        <View
                                                                                                          style={
                                                                                                            styles.View_16_354
                                                                                                          }
                                                                                                        >
                                                                                                          <View
                                                                                                            style={
                                                                                                              styles.View_16_355
                                                                                                            }
                                                                                                          >
                                                                                                            <View
                                                                                                              style={
                                                                                                                styles.View_16_356
                                                                                                              }
                                                                                                            >
                                                                                                              <View
                                                                                                                style={
                                                                                                                  styles.View_16_357
                                                                                                                }
                                                                                                              >
                                                                                                                <View
                                                                                                                  style={
                                                                                                                    styles.View_16_358
                                                                                                                  }
                                                                                                                >
                                                                                                                  <View
                                                                                                                    style={
                                                                                                                      styles.View_16_359
                                                                                                                    }
                                                                                                                  >
                                                                                                                    <View
                                                                                                                      style={
                                                                                                                        styles.View_16_360
                                                                                                                      }
                                                                                                                    >
                                                                                                                      <View
                                                                                                                        style={
                                                                                                                          styles.View_16_361
                                                                                                                        }
                                                                                                                      >
                                                                                                                        <View
                                                                                                                          style={
                                                                                                                            styles.View_16_362
                                                                                                                          }
                                                                                                                        >
                                                                                                                          <View
                                                                                                                            style={
                                                                                                                              styles.View_16_363
                                                                                                                            }
                                                                                                                          >
                                                                                                                            <View
                                                                                                                              style={
                                                                                                                                styles.View_16_364
                                                                                                                              }
                                                                                                                            >
                                                                                                                              <View
                                                                                                                                style={
                                                                                                                                  styles.View_16_365
                                                                                                                                }
                                                                                                                              >
                                                                                                                                <View
                                                                                                                                  style={
                                                                                                                                    styles.View_16_366
                                                                                                                                  }
                                                                                                                                >
                                                                                                                                  <View
                                                                                                                                    style={
                                                                                                                                      styles.View_16_367
                                                                                                                                    }
                                                                                                                                  >
                                                                                                                                    <View
                                                                                                                                      style={
                                                                                                                                        styles.View_16_368
                                                                                                                                      }
                                                                                                                                    >
                                                                                                                                      <View
                                                                                                                                        style={
                                                                                                                                          styles.View_16_369
                                                                                                                                        }
                                                                                                                                      >
                                                                                                                                        <View
                                                                                                                                          style={
                                                                                                                                            styles.View_16_370
                                                                                                                                          }
                                                                                                                                        >
                                                                                                                                          <View
                                                                                                                                            style={
                                                                                                                                              styles.View_16_371
                                                                                                                                            }
                                                                                                                                          >
                                                                                                                                            <View
                                                                                                                                              style={
                                                                                                                                                styles.View_16_372
                                                                                                                                              }
                                                                                                                                            >
                                                                                                                                              <View
                                                                                                                                                style={
                                                                                                                                                  styles.View_16_373
                                                                                                                                                }
                                                                                                                                              >
                                                                                                                                                <View
                                                                                                                                                  style={
                                                                                                                                                    styles.View_16_374
                                                                                                                                                  }
                                                                                                                                                >
                                                                                                                                                  <View
                                                                                                                                                    style={
                                                                                                                                                      styles.View_16_375
                                                                                                                                                    }
                                                                                                                                                  >
                                                                                                                                                    <View
                                                                                                                                                      style={
                                                                                                                                                        styles.View_16_376
                                                                                                                                                      }
                                                                                                                                                    >
                                                                                                                                                      <View
                                                                                                                                                        style={
                                                                                                                                                          styles.View_16_377
                                                                                                                                                        }
                                                                                                                                                      >
                                                                                                                                                        <View
                                                                                                                                                          style={
                                                                                                                                                            styles.View_16_378
                                                                                                                                                          }
                                                                                                                                                        >
                                                                                                                                                          <View
                                                                                                                                                            style={
                                                                                                                                                              styles.View_16_379
                                                                                                                                                            }
                                                                                                                                                          >
                                                                                                                                                            <View
                                                                                                                                                              style={
                                                                                                                                                                styles.View_16_380
                                                                                                                                                              }
                                                                                                                                                            >
                                                                                                                                                              <View
                                                                                                                                                                style={
                                                                                                                                                                  styles.View_16_381
                                                                                                                                                                }
                                                                                                                                                              >
                                                                                                                                                                <View
                                                                                                                                                                  style={
                                                                                                                                                                    styles.View_16_382
                                                                                                                                                                  }
                                                                                                                                                                >
                                                                                                                                                                  <View
                                                                                                                                                                    style={
                                                                                                                                                                      styles.View_16_383
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
        <View style={styles.View_16_384}>
          <View style={styles.View_I16_384_12_24}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eeae044-7091-4d6f-81c8-924e4b71a280"
              }}
              style={styles.ImageBackground_I16_384_12_25}
            />
            <View source={{ uri: "null" }} style={styles.View_I16_384_12_28} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a39ff296-0865-491a-bbca-26c84c4fec94"
          }}
          style={styles.ImageBackground_16_385}
        />
        <View style={styles.View_16_386}>
          <Text style={styles.Text_16_386}>Don’t have an account? </Text>
        </View>
        <View style={styles.View_16_387}>
          <Text style={styles.Text_16_387}>SIGN UP</Text>
        </View>
        <View style={styles.View_16_388}>
          <Text style={styles.Text_16_388}>Welcome Back Idiator ! </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_16_389}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("13_278"))
          }
        >
          <View style={styles.View_I16_389_13_266} />
        </TouchableOpacity>
        <View style={styles.View_16_390}>
          <Text style={styles.Text_16_390}>I accept terms and conditions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d5acc50-34a5-4d69-8c08-9c834d98818a"
          }}
          style={styles.ImageBackground_20_651}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_16_293: {
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
  ImageBackground_16_294: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("9%")
  },
  View_16_295: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("133%"),
    backgroundColor: "rgba(0, 129, 84, 1)"
  },
  ImageBackground_16_296: {
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
  ImageBackground_16_297: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_16_298: {
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
  ImageBackground_16_299: {
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
  View_16_300: {
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
  Text_16_300: {
    color: "rgba(105, 103, 103, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_301: {
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
  Text_16_301: {
    color: "rgba(105, 103, 103, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_302: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 129, 84, 1)"
  },
  View_16_303: {
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
  Text_16_303: {
    color: "rgba(49, 49, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_304: {
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
  Text_16_304: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_305: {
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
  View_16_306: {
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
  View_16_307: {
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
  View_16_308: {
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
  View_16_309: {
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
  View_16_310: {
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
  View_16_311: {
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
  View_16_312: {
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
  View_16_313: {
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
  View_16_314: {
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
  View_16_315: {
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
  View_16_316: {
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
  View_16_317: {
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
  View_16_318: {
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
  View_16_319: {
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
  View_16_320: {
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
  View_16_321: {
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
  View_16_322: {
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
  View_16_323: {
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
  View_16_324: {
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
  View_16_325: {
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
  View_16_326: {
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
  View_16_327: {
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
  View_16_328: {
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
  View_16_329: {
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
  View_16_330: {
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
  View_16_331: {
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
  View_16_332: {
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
  View_16_333: {
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
  View_16_334: {
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
  View_16_335: {
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
  View_16_336: {
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
  View_16_337: {
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
  View_16_338: {
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
  View_16_339: {
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
  View_16_340: {
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
  View_16_341: {
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
  View_16_342: {
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
  View_16_343: {
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
  View_16_344: {
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
  View_16_345: {
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
  View_16_346: {
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
  View_16_347: {
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
  View_16_348: {
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
  View_16_349: {
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
  View_16_350: {
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
  View_16_351: {
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
  View_16_352: {
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
  View_16_353: {
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
  View_16_354: {
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
  View_16_355: {
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
  View_16_356: {
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
  View_16_357: {
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
  View_16_358: {
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
  View_16_359: {
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
  View_16_360: {
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
  View_16_361: {
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
  View_16_362: {
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
  View_16_363: {
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
  View_16_364: {
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
  View_16_365: {
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
  View_16_366: {
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
  View_16_367: {
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
  View_16_368: {
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
  View_16_369: {
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
  View_16_370: {
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
  View_16_371: {
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
  View_16_372: {
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
  View_16_373: {
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
  View_16_374: {
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
  View_16_375: {
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
  View_16_376: {
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
  View_16_377: {
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
  View_16_378: {
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
  View_16_379: {
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
  View_16_380: {
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
  View_16_381: {
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
  View_16_382: {
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
  View_16_383: {
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
  View_16_384: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I16_384_12_24: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I16_384_12_25: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I16_384_12_28: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_16_385: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%")
  },
  View_16_386: {
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
  Text_16_386: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_387: {
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
  Text_16_387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_388: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_16_388: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_16_389: {
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
  View_I16_389_13_266: {
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
  View_16_390: {
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
  Text_16_390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_651: {
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
