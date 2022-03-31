const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres')
const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }


  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const result = await this.pool.query(query)
    return result.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const query = 'DELETE FROM public.tasks WHERE id=' + { id }
    const result = await this.pool.query(query)
    return result;
  }
}

module.exports = UserService;
