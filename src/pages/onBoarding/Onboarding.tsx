import { FC, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { TNewAccount } from '../../store/types';

const Onboarding: FC = () => {
  const { createAccountAction } = useActions();
  const [accountData, setAccountData] = useState<TNewAccount>({
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: '',
    gender_interest: '',
    url: '',
    about: '',
    matches: [],
  });

  const handleChangeFields = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value =
      e.currentTarget.type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value;
    setAccountData({ ...accountData, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createAccountAction(accountData);
  };
  return (
    <div className="onBoarding">
      <form className="onBoarding__form" onSubmit={handleSubmitForm}>
        <section>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            required={true}
            value={accountData.first_name}
            onChange={handleChangeFields}
            placeholder="First Name"
          />

          <label>Birthday</label>
          <div className="onBoarding__form__multiple-input-container">
            <input
              id="dob_day"
              type="number"
              name="dob_day"
              required={true}
              value={accountData.dob_day}
              onChange={handleChangeFields}
              placeholder="DD"
            />
            <input
              id="dob_month"
              type="number"
              name="dob_month"
              required={true}
              value={accountData.dob_month}
              onChange={handleChangeFields}
              placeholder="MM"
            />
            <input
              id="dob_year"
              type="number"
              name="dob_year"
              required={true}
              value={accountData.dob_year}
              onChange={handleChangeFields}
              placeholder="YYYY"
            />
          </div>

          <label>Gender</label>
          <div className="onBoarding__form__multiple-input-container">
            <input
              id="man-gender-identity"
              type="radio"
              name="gender_identity"
              required={true}
              value="man"
              onChange={handleChangeFields}
              checked={accountData.gender_identity === 'man'}
            />
            <label htmlFor="man-gender-identity">Man</label>

            <input
              id="women-gender-identity"
              type="radio"
              name="gender_identity"
              required={true}
              value="women"
              onChange={handleChangeFields}
              checked={accountData.gender_identity === 'women'}
            />
            <label htmlFor="women-gender-identity">Women</label>

            <input
              id="more-gender-identity"
              type="radio"
              name="gender_identity"
              required={true}
              value="more"
              onChange={handleChangeFields}
              checked={accountData.gender_identity === 'more'}
            />
            <label htmlFor="more-gender-identity">More</label>
          </div>

          <label htmlFor="show-gender">Show gender on my profile</label>
          <input
            id="show-gender"
            type="checkbox"
            name="show_gender"
            required={true}
            onChange={handleChangeFields}
            checked={accountData.show_gender}
          />

          <label htmlFor="show-gender">Show Me</label>
          <div className="onBoarding__form__multiple-input-container">
            <input
              id="man-gender-interest"
              type="radio"
              name="gender_interest"
              required={true}
              value="man"
              onChange={handleChangeFields}
              checked={accountData.gender_interest === 'man'}
            />
            <label htmlFor="man-gender-interest">Man</label>

            <input
              id="women-gender-interest"
              type="radio"
              name="gender_interest"
              required={true}
              value="women"
              onChange={handleChangeFields}
              checked={accountData.gender_interest === 'women'}
            />
            <label htmlFor="women-gender-interest">Women</label>

            <input
              id="everyone-gender-interest"
              type="radio"
              name="gender_interest"
              required={true}
              value="everyone"
              onChange={handleChangeFields}
              checked={accountData.gender_interest === 'everyone'}
            />
            <label htmlFor="everyone-gender-interest">Everyone</label>
          </div>

          <label htmlFor="aboutMe">About me</label>
          <input
            type="text"
            id="aboutMe"
            name="about"
            required={true}
            value={accountData.about}
            onChange={handleChangeFields}
            placeholder="I like long walks..."
          />
          <input type="submit" />
        </section>

        <section>
          <label htmlFor="url">Profile</label>
          <input
            type="url"
            id="url"
            name="url"
            required={true}
            value={accountData.url}
            onChange={handleChangeFields}
            placeholder="URL..."
          />
          <div className="onBoarding__form__photo-container">
            <img src={accountData.url} alt="profile pic preview" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default Onboarding;
