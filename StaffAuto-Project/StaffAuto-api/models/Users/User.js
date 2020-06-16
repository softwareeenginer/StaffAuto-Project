module.exports = (sequelize, Sequelize) => {
	return sequelize.define('users', {
		user_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nameandsurname: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		salary:{
			type: Sequelize.INTEGER,
			allowNull: false
		},
		phone:{
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		adress: {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		identity:{
			type:Sequelize.INTEGER,
			allowNull: false,
		},
		mission:{
			type: Sequelize.STRING(200),
			allowNull: false,
		},
		healthinfo:{
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		holiday:{
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		status: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue:1
		}
	})
};
