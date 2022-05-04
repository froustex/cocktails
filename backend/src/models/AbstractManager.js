class AbstractManager {
  constructor(connection, table) {
    this.connection = connection;
    this.table = table;  // favorite
  }

  find(idcocktail) {
    return this.connection.query(`select * from  ${this.table} where idcocktail = ?`, [
      idcocktail,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(idcocktail) {
    return this.connection.query(`delete from ${this.table} where idcocktail = ?`, [
      idcocktail,
    ]);
  }
}

module.exports = AbstractManager;
