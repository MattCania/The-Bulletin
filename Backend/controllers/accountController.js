import bcrypt from "bcryptjs";
import UserAccounts from "../models/userAccounts.js";
import UserProfiles from "../models/userProfiles.js";

async function registerAccount(req, res) {
  const { firstname, middlename, lastname, birthday, email, password } =
    req.body;

  const birthdate = new Date(birthday)
  const currentdate = new Date()
  const birthYear = birthdate.getFullYear()
  const currentYear = currentdate.getFullYear()
  const age = currentYear - birthYear

  try {
  const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const accountResults = await UserAccounts.create({
      email: email,
      hashedPassword: hashedPassword
	});

	if (!accountResults) {
		throw new Error("Error Account Creation")
	}

	const profileResults = await UserProfiles.create({
		accountId: accountResults.accountId,
		firstName: firstname,
		middleName: middlename,
		lastName: lastname,
		birthday: birthday,
		age: age
	})

	if (!profileResults) {
		UserAccounts.destroy({where: {email}})
		throw new Error("Error Profile Creation")
	}

	res.json({message: "Successful Account Creation"})
  } catch (error) {
    res.json({ message: error.message });
  }
}

async function loginAccount(req, res) {
  const { email, password } = req.body;

  if (!email) {
    console.log("Please enter a valid Email");
    res.json({ message: "Please enter a valid email" });
  }
  if (!password) {
    console.log("Please enter a valid password");
    res.json({ message: "Please enter a valid password" });
  }
}

export default {
  registerAccount,
  loginAccount,
};
