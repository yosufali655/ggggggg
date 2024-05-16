const { baseClient } = require("@root/src/base")

class DevXor extends baseClient {
  /**
   *
   * @constructor
   * @param {DevXorConfiguration} options
   */
  constructor(options) {
    super(options.CustomClientOptions, options.database)
    this.datainput = options
    this.loadEvents("src/events")
    this.loadComponents("src/ComponentsAction")
    this.loadCommands("src/Commands")

  };

  /**
   * @param {string} [token] token disord bot 
   */
  botlogin(token = this.datainput.token) {
    this.login(process.env.token || token).catch((err) => {
      console.log(err)
      this.logger.debug(err.message)
    })

  };
};

module.exports = DevXor;


/**
 * @typedef {"MONGODB"|"JSON"} DataBaseType
 */

/**
 * @typedef {object} DataBase Default DataBase configuration.
 * @property {DataBaseType} database_type
 * @property {string} [mongo_uri]
 * @property {import("mysql2").PoolOptions} [MySQL]
 * 
 */

/**
 * @typedef {object} DevXorConfiguration Default DevXor configuration.
 *
 * @property {string} token 
 * 
 * @property {DataBase} database
 * 
 * @property {import("discord.js/typings/index").ClientOptions} [CustomClientOptions={}]
 * 
 */