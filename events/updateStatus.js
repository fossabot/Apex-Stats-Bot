const { client, Discord } = require("../ApexStats.js");
var { DateTime } = require("luxon");
const config = require("../config.json");

var UpEmoji = "<:StatusUp:786800700533112872>";
var SlowEmoji = "<:StatusSlow:786800700541501461>";
var DownEmoji = "<:StatusDown:786800700201238570>";
var NoDataEmoji = "<:StatusNoData:786800700499034122>";

// Require Wrapper Library
const MozambiqueAPI = require("mozambique-api-wrapper");

// Create Client instance by passing in API key
let mozambiqueClient = new MozambiqueAPI(config.APIKey);

client.once("ready", () => {
  // ----- APEX MAP ROTATION UPDATE ----- //
  function updateStatus() {
    mozambiqueClient.server().then(function (result) {
      function getStatus(status) {
        if (status == "UP") {
          return UpEmoji;
        } else if (status == "SLOW") {
          return SlowEmoji;
        } else if (status == "DOWN") {
          return DownEmoji;
        } else {
          return NoDataEmoji;
        }
      }

      const status = new Discord.MessageEmbed()
        .setTitle("Apex Legends Server Status")
        .addField(
          "Origin Login",
          `${getStatus(result.Origin_login["EU-West"].Status)}EU West (${
            result.Origin_login["EU-West"].ResponseTime
          }ms)\n${getStatus(result.Origin_login["EU-East"].Status)}EU East (${
            result.Origin_login["EU-East"].ResponseTime
          }ms)\n${getStatus(result.Origin_login["US-West"].Status)}US West (${
            result.Origin_login["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.Origin_login["US-Central"].Status
          )}US Central (${
            result.Origin_login["US-Central"].ResponseTime
          }ms)\n${getStatus(result.Origin_login["US-East"].Status)}US East (${
            result.Origin_login["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.Origin_login["SouthAmerica"].Status
          )}South America (${
            result.Origin_login["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.Origin_login["Asia"].Status)}Asia (${
            result.Origin_login["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "EA Novafusion",
          `${getStatus(result.EA_novafusion["EU-West"].Status)}EU West (${
            result.EA_novafusion["EU-West"].ResponseTime
          }ms)\n${getStatus(result.EA_novafusion["EU-East"].Status)}EU East (${
            result.EA_novafusion["EU-East"].ResponseTime
          }ms)\n${getStatus(result.EA_novafusion["US-West"].Status)}US West (${
            result.EA_novafusion["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.EA_novafusion["US-Central"].Status
          )}US Central (${
            result.EA_novafusion["US-Central"].ResponseTime
          }ms)\n${getStatus(result.EA_novafusion["US-East"].Status)}US East (${
            result.EA_novafusion["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.EA_novafusion["SouthAmerica"].Status
          )}South America (${
            result.EA_novafusion["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.EA_novafusion["Asia"].Status)}Asia (${
            result.EA_novafusion["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "EA Accounts",
          `${getStatus(result.EA_accounts["EU-West"].Status)}EU West (${
            result.EA_accounts["EU-West"].ResponseTime
          }ms)\n${getStatus(result.EA_accounts["EU-East"].Status)}EU East (${
            result.EA_accounts["EU-East"].ResponseTime
          }ms)\n${getStatus(result.EA_accounts["US-West"].Status)}US West (${
            result.EA_accounts["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.EA_accounts["US-Central"].Status
          )}US Central (${
            result.EA_accounts["US-Central"].ResponseTime
          }ms)\n${getStatus(result.EA_accounts["US-East"].Status)}US East (${
            result.EA_accounts["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.EA_accounts["SouthAmerica"].Status
          )}South America (${
            result.EA_accounts["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.EA_accounts["Asia"].Status)}Asia (${
            result.EA_accounts["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "[PC] Apex Login",
          `${getStatus(result.ApexOauth_PC["EU-West"].Status)}EU West (${
            result.ApexOauth_PC["EU-West"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PC["EU-East"].Status)}EU East (${
            result.ApexOauth_PC["EU-East"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PC["US-West"].Status)}US West (${
            result.ApexOauth_PC["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_PC["US-Central"].Status
          )}US Central (${
            result.ApexOauth_PC["US-Central"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PC["US-East"].Status)}US East (${
            result.ApexOauth_PC["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_PC["SouthAmerica"].Status
          )}South America (${
            result.ApexOauth_PC["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PC["Asia"].Status)}Asia (${
            result.ApexOauth_PC["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "[PS4] Apex Login",
          `${getStatus(result.ApexOauth_PS4["EU-West"].Status)}EU West (${
            result.ApexOauth_PS4["EU-West"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PS4["EU-East"].Status)}EU East (${
            result.ApexOauth_PS4["EU-East"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PS4["US-West"].Status)}US West (${
            result.ApexOauth_PS4["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_PS4["US-Central"].Status
          )}US Central (${
            result.ApexOauth_PS4["US-Central"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PS4["US-East"].Status)}US East (${
            result.ApexOauth_PS4["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_PS4["SouthAmerica"].Status
          )}South America (${
            result.ApexOauth_PS4["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_PS4["Asia"].Status)}Asia (${
            result.ApexOauth_PS4["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "[Xbox 1] Apex Login",
          `${getStatus(result.ApexOauth_X1["EU-West"].Status)}EU West (${
            result.ApexOauth_X1["EU-West"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_X1["EU-East"].Status)}EU East (${
            result.ApexOauth_X1["EU-East"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_X1["US-West"].Status)}US West (${
            result.ApexOauth_X1["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_X1["US-Central"].Status
          )}US Central (${
            result.ApexOauth_X1["US-Central"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_X1["US-East"].Status)}US East (${
            result.ApexOauth_X1["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_X1["SouthAmerica"].Status
          )}South America (${
            result.ApexOauth_X1["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_X1["Asia"].Status)}Asia (${
            result.ApexOauth_X1["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "[Crossplay] Apex Login",
          `${getStatus(result.ApexOauth_Crossplay["EU-West"].Status)}EU West (${
            result.ApexOauth_Crossplay["EU-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Crossplay["EU-East"].Status
          )}EU East (${
            result.ApexOauth_Crossplay["EU-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Crossplay["US-West"].Status
          )}US West (${
            result.ApexOauth_Crossplay["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Crossplay["US-Central"].Status
          )}US Central (${
            result.ApexOauth_Crossplay["US-Central"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Crossplay["US-East"].Status
          )}US East (${
            result.ApexOauth_Crossplay["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Crossplay["SouthAmerica"].Status
          )}South America (${
            result.ApexOauth_Crossplay["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_Crossplay["Asia"].Status)}Asia (${
            result.ApexOauth_Crossplay["Asia"].ResponseTime
          }ms)`,
          true
        )
        .addField(
          "[Steam] Apex Login",
          `${getStatus(result.ApexOauth_Steam["EU-West"].Status)}EU West (${
            result.ApexOauth_Steam["EU-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Steam["EU-East"].Status
          )}EU East (${
            result.ApexOauth_Steam["EU-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Steam["US-West"].Status
          )}US West (${
            result.ApexOauth_Steam["US-West"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Steam["US-Central"].Status
          )}US Central (${
            result.ApexOauth_Steam["US-Central"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Steam["US-East"].Status
          )}US East (${
            result.ApexOauth_Steam["US-East"].ResponseTime
          }ms)\n${getStatus(
            result.ApexOauth_Steam["SouthAmerica"].Status
          )}South America (${
            result.ApexOauth_Steam["SouthAmerica"].ResponseTime
          }ms)\n${getStatus(result.ApexOauth_Steam["Asia"].Status)}Asia (${
            result.ApexOauth_Steam["Asia"].ResponseTime
          }ms)`,
          true
        )
        .setTimestamp();

      const guild = client.guilds.cache.get(config.statusInfo.guildID);
      if (!guild) return console.log("Unable to find guild.");

      const channel = guild.channels.cache.find(
        (c) => c.id === config.statusInfo.channelID && c.type === "text"
      );
      if (!channel) return console.log("Unable to find channel.");

      try {
        const message = channel.messages.fetch(config.statusInfo.messageID);
        if (!message) return console.log("Unable to find message.");

        channel.messages.fetch(config.statusInfo.messageID).then((mesg) => {
          mesg.edit(status);
        });
      } catch (err) {
        console.error(`Other Error: ${err}`);
      }
    });
  }

  updateStatus();
  console.log(
    `[${DateTime.local().toFormat("hh:mm:ss")}] Updated Status Embed`
  );

  setInterval(function () {
    var date = new Date();

    console.log("Checking update interval...");

    if (date.getMinutes() % config.statusInfo.updateInterval == 0) {
      updateStatus();
      console.log(
        `[${DateTime.local().toFormat("hh:mm:ss")}] Updated Status Embed`
      );
    }
  }, Math.max(1, 1 || 1) * 60 * 1000);
});
