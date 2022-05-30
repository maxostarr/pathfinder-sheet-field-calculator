Hooks.on("preUpdateActor", function (actor, data, options, userId) {
  data.flags.pdfoundry.FormData.STRMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.STR) ||
        parseInt(actor.data.flags.pdfoundry.FormData.STR) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.STRMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.STRMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD2) ||
      0);

  data.flags.pdfoundry.FormData.DEXMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.DEX) ||
        parseInt(actor.data.flags.pdfoundry.FormData.DEX) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD2) ||
      0);

  data.flags.pdfoundry.FormData.CONMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.CON) ||
        parseInt(actor.data.flags.pdfoundry.FormData.CON) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.CONMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CONMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.CONMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CONMOD2) ||
      0);

  data.flags.pdfoundry.FormData.INTMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.INT) ||
        parseInt(actor.data.flags.pdfoundry.FormData.INT) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.INTMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.INTMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD2) ||
      0);

  data.flags.pdfoundry.FormData.WISMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.WIS) ||
        parseInt(actor.data.flags.pdfoundry.FormData.WIS) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.WISMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.WISMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD2) ||
      0);

  data.flags.pdfoundry.FormData.CHAMOD =
    Math.floor(
      ((parseInt(data.flags.pdfoundry.FormData.CHA) ||
        parseInt(actor.data.flags.pdfoundry.FormData.CHA) ||
        0) -
        10) /
        2,
    ) +
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD1) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD1) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD2) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD2) ||
      0);

  data.flags.pdfoundry.FormData.Text218 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text140) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text140) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text179) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text179) ||
      0);

  data.flags.pdfoundry.FormData.Text219 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text141) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text141) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text180) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text180) ||
      0);

  data.flags.pdfoundry.FormData.Text220 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text142) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text142) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text181) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text181) ||
      0);

  data.flags.pdfoundry.FormData.Text221 =
    (parseInt(data.flags.pdfoundry.FormData.STRMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text143) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text143) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text182) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text182) ||
      0);

  data.flags.pdfoundry.FormData.Text222 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text144) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text144) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text183) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text183) ||
      0);

  data.flags.pdfoundry.FormData.Text223 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text145) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text145) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text184) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text184) ||
      0);

  data.flags.pdfoundry.FormData.Text224 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text146) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text146) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text185) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text185) ||
      0);

  data.flags.pdfoundry.FormData.Text225 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text147) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text147) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text186) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text186) ||
      0);

  data.flags.pdfoundry.FormData.Text226 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text148) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text148) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text187) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text187) ||
      0);

  data.flags.pdfoundry.FormData.Text227 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text149) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text149) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text188) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text188) ||
      0);

  data.flags.pdfoundry.FormData.Text228 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text150) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text150) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text189) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text189) ||
      0);

  data.flags.pdfoundry.FormData.Text229 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text151) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text151) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text190) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text190) ||
      0);

  data.flags.pdfoundry.FormData.Text230 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text152) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text152) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text191) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text191) ||
      0);

  data.flags.pdfoundry.FormData.Text231 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text153) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text153) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text192) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text192) ||
      0);

  data.flags.pdfoundry.FormData.Text232 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text154) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text154) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text193) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text193) ||
      0);

  data.flags.pdfoundry.FormData.Text233 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text155) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text155) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text194) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text194) ||
      0);

  data.flags.pdfoundry.FormData.Text234 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text156) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text156) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text195) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text195) ||
      0);

  data.flags.pdfoundry.FormData.Text235 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text157) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text157) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text196) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text196) ||
      0);

  data.flags.pdfoundry.FormData.Text236 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text158) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text158) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text197) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text197) ||
      0);

  data.flags.pdfoundry.FormData.Text237 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text159) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text159) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text198) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text198) ||
      0);

  data.flags.pdfoundry.FormData.Text238 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text160) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text160) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text199) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text199) ||
      0);

  data.flags.pdfoundry.FormData.Text239 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text161) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text161) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text200) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text200) ||
      0);

  data.flags.pdfoundry.FormData.Text240 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text162) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text162) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text201) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text201) ||
      0);

  data.flags.pdfoundry.FormData.Text241 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text163) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text163) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text202) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text202) ||
      0);

  data.flags.pdfoundry.FormData.Text242 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text164) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text164) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text203) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text203) ||
      0);

  data.flags.pdfoundry.FormData.Text243 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text165) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text165) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text204) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text204) ||
      0);

  data.flags.pdfoundry.FormData.Text244 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text166) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text166) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text205) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text205) ||
      0);

  data.flags.pdfoundry.FormData.Text245 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text167) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text167) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text206) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text206) ||
      0);

  data.flags.pdfoundry.FormData.Text246 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text168) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text168) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text207) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text207) ||
      0);

  data.flags.pdfoundry.FormData.Text247 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text169) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text169) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text208) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text208) ||
      0);

  data.flags.pdfoundry.FormData.Text248 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text170) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text170) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text209) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text209) ||
      0);

  data.flags.pdfoundry.FormData.Text249 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text171) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text171) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text210) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text210) ||
      0);

  data.flags.pdfoundry.FormData.Text250 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text172) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text172) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text211) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text211) ||
      0);

  data.flags.pdfoundry.FormData.Text251 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text173) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text173) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text212) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text212) ||
      0);

  data.flags.pdfoundry.FormData.Text252 =
    (parseInt(data.flags.pdfoundry.FormData.INTMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.INTMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text174) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text174) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text213) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text213) ||
      0);

  data.flags.pdfoundry.FormData.Text253 =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text175) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text175) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text214) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text214) ||
      0);

  data.flags.pdfoundry.FormData.Text254 =
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text176) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text176) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text215) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text215) ||
      0);

  data.flags.pdfoundry.FormData.Text255 =
    (parseInt(data.flags.pdfoundry.FormData.STRMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text177) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text177) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text216) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text216) ||
      0);

  data.flags.pdfoundry.FormData.Text256 =
    (parseInt(data.flags.pdfoundry.FormData.CHAMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CHAMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text178) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text178) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text217) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text217) ||
      0);

  data.flags.pdfoundry.FormData.INIT =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.MISCINITMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.MISCINITMOD) ||
      0);

  data.flags.pdfoundry.FormData.AC =
    (parseInt(data.flags.pdfoundry.FormData.ARMORBONUS) ||
      parseInt(actor.data.flags.pdfoundry.FormData.ARMORBONUS) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.SHIELDBONUS) ||
      parseInt(actor.data.flags.pdfoundry.FormData.SHIELDBONUS) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.SIZEMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.SIZEMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.NATURALARMOR) ||
      parseInt(actor.data.flags.pdfoundry.FormData.NATURALARMOR) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEFLECTIONMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEFLECTIONMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.MISCACMODIFIER) ||
      parseInt(actor.data.flags.pdfoundry.FormData.MISCACMODIFIER) ||
      0) +
    10;

  data.flags.pdfoundry.FormData.TOUCHAC =
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) + 10;

  data.flags.pdfoundry.FormData.FLATFOOTAC =
    (parseInt(data.flags.pdfoundry.FormData.ARMORBONUS) ||
      parseInt(actor.data.flags.pdfoundry.FormData.ARMORBONUS) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.SHIELDBONUS) ||
      parseInt(actor.data.flags.pdfoundry.FormData.SHIELDBONUS) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.SIZEMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.SIZEMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.NATURALARMOR) ||
      parseInt(actor.data.flags.pdfoundry.FormData.NATURALARMOR) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEFLECTIONMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEFLECTIONMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.MISCACMODIFIER) ||
      parseInt(actor.data.flags.pdfoundry.FormData.MISCACMODIFIER) ||
      0) +
    10;

  data.flags.pdfoundry.FormData.FORTSAVE =
    (parseInt(data.flags.pdfoundry.FormData.FORTBASE) ||
      parseInt(actor.data.flags.pdfoundry.FormData.FORTBASE) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.CONMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.CONMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.FORTMAGIC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.FORTMAGIC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.FORTMISC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.FORTMISC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.FORTTEMP) ||
      parseInt(actor.data.flags.pdfoundry.FormData.FORTTEMP) ||
      0);

  data.flags.pdfoundry.FormData.REFSAVE =
    (parseInt(data.flags.pdfoundry.FormData.REFBASE) ||
      parseInt(actor.data.flags.pdfoundry.FormData.REFBASE) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.REFMAGIC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.REFMAGIC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.REFMISC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.REFMISC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.REFTEMP) ||
      parseInt(actor.data.flags.pdfoundry.FormData.REFTEMP) ||
      0);

  data.flags.pdfoundry.FormData.WILLSAVE =
    (parseInt(data.flags.pdfoundry.FormData.WILLBASE) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WILLBASE) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.WISMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WISMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.WILLMAGIC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WILLMAGIC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.WILLMISC) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WILLMISC) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.WILLTEMP) ||
      parseInt(actor.data.flags.pdfoundry.FormData.WILLTEMP) ||
      0);

  data.flags.pdfoundry.FormData.CMB =
    (parseInt(data.flags.pdfoundry.FormData.BAB) ||
      parseInt(actor.data.flags.pdfoundry.FormData.BAB) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.STRMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text295) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text295) ||
      0);

  data.flags.pdfoundry.FormData.CMD =
    (parseInt(data.flags.pdfoundry.FormData.BAB) ||
      parseInt(actor.data.flags.pdfoundry.FormData.BAB) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.STRMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.STRMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.DEXMOD) ||
      parseInt(actor.data.flags.pdfoundry.FormData.DEXMOD) ||
      0) +
    (parseInt(data.flags.pdfoundry.FormData.Text297) ||
      parseInt(actor.data.flags.pdfoundry.FormData.Text297) ||
      0) +
    10;
});
