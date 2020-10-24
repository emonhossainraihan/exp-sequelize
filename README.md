## Intro 

Sequelize is a popular, easy-to-use JavaScript object relational mapping (ORM) tool that works with SQL databases.

In short, Sequelize is an abstraction layer for raw SQL that enables us to use JavaScript to interact with our database.

### initialize a Sequelize project

```
npx sequelize-cli init
```

Initializing the project creates four subdirectories: `config`, `migrations`, `models`, and `seeders`.

For future projects, you’ll use config/config.json to control user access, name databases, and determine which SQL dialect Sequelize will use.

###  Sequelize CLI to create the db

```
npx sequelize-cli db:create
```

### create a model

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
```

Running `model:generate` uses the information we pass via `--name` and `--attributes` to create both a model file, which Sequelize will use to organize the information it delivers to other parts of our Node project, and a migration, which Sequelize will use to set up the proper tables in our database.

To execute our migration, which will create the `Users` table and the necessary columns in our database.

```
npx sequelize-cli db:migrate
```

Now the database was created in real.
### create a seed file:

```
npx sequelize-cli seed:generate --name user
```

Execute it:

```
npx sequelize-cli db:seed:all
```

Congratulations! You’ve used the Sequelize command line interface to set up Sequelize to moderate interactions between an SQL database and Node. 