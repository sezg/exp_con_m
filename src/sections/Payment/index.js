/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import RadioButton from './RadioButton';
import InputField from './InputField';

const Payment = (props) => {
  Payment.propTypes = {
    setView: PropTypes.func,
  };

  const [state, setState] = useState({
    plan: null,
    fullName: '',
    billingAddress: '',
    city: '',
    postalCode: '',
    country: '',
    cardholderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  const selectPlan = (plan) => {
    setState({ ...state, plan: plan });
  };

  const updateField = (field, value) => {
    setState({ ...state, [field]: value });
  };

  const handleSubmit = () => {
    const data = {
      plan: state.plan,
      full_name: state.fullName,
      billing_address: state.billingAddress,
      city: state.city,
      postal_code: state.postalCode,
      country: state.country,
      cardholderName: state.cardholderName,
      cardNumber: state.cardNumber,
      expiry_month: state.expiryMonth,
      expiry_year: state.expiryYear,
      cvv: state.cvv,
    };
    console.log(data);
  };

  const countries = ['United States', 'Canada', 'Mexico'];
  const expiryMonths = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const expiryYears = [
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
  ];

  return (
    <div className="Payment">
      {/* Nav Bar */}
      <Nav setView={props.setView} section="info" />

      {/* Main Content */}
      <main>
        {/* Section Header */}
        <h1>PAYMENT</h1>

        <div className="step-one">
          <h3>1. Select your plan</h3>
          <div className="plans">
            <RadioButton
              label="BASIC"
              selected={state.plan === 'BASIC'}
              styles="red"
              onClick={selectPlan}
            />
            <RadioButton
              label="ADVANCED"
              selected={state.plan === 'ADVANCED'}
              styles="yellow"
              onClick={selectPlan}
            />
            <RadioButton
              label="PRO"
              selected={state.plan === 'PRO'}
              styles="blue"
              onClick={selectPlan}
            />
          </div>
        </div>

        <div className="container">
          <div className="step-two">
            <h3>2. Billing Information</h3>
            <div className="fields">
              <InputField
                label="Full Name"
                field="fullName"
                value={state.fullName}
                onChange={updateField}
              />
              <InputField
                label="Billing Address"
                field="billingAddress"
                value={state.billingAddress}
                onChange={updateField}
              />
              <div className="row">
                <InputField
                  label="City"
                  field="city"
                  value={state.city}
                  onChange={updateField}
                />
                <InputField
                  label="Postal Code"
                  field="postalCode"
                  value={state.postalCode}
                  onChange={updateField}
                />
              </div>
              <InputField
                label="Country"
                field="country"
                value={state.country}
                onChange={updateField}
                dropdown={true}
                options={countries}
              />
            </div>
          </div>
          <div className="step-three">
            <h3>3. Credit Card Information</h3>
            <div className="fields">
              <InputField
                label="Cardholder's Name"
                field="cardholderName"
                value={state.cardholderName}
                onChange={updateField}
              />
              <InputField
                label="Card Number"
                field="cardNumber"
                value={state.cardNumber}
                onChange={updateField}
              />
              <div className="row">
                <InputField
                  label="Expiry Month"
                  field="expiryMonth"
                  value={state.expiryMonth}
                  onChange={updateField}
                  dropdown={true}
                  options={expiryMonths}
                />
                <InputField
                  label="Expiry Year"
                  field="expiryMonth"
                  value={state.expiryYear}
                  onChange={updateField}
                  dropdown={true}
                  options={expiryYears}
                />
              </div>
              <InputField
                label="CVV"
                field="cvv"
                value={state.cvv}
                onChange={updateField}
              />
            </div>
          </div>
        </div>

        <div className="submit">
          <div>
            By continuing, I acknowledge that I&apos;ve read and agree to the{' '}
            <a href="">Terms of Service</a> & <a href="">Privacy Policy</a>.
          </div>
          <Button text="DOWNLOAD" styles="bg-rainbow" onClick={handleSubmit} />
        </div>
      </main>
    </div>
  );
};

export default Payment;
