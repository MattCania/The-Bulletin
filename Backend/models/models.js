import UserAccounts from "./userAccounts";
import UserProfiles from "./userProfiles";


const models = {
	UserAccounts,
	UserProfiles
}

Object.values(models).forEach((model) => {
	if (model.associate){
		model.associate(models)
	}
})

export default models