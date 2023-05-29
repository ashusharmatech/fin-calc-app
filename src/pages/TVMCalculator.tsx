import React, { useState } from 'react';
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
} from '@chakra-ui/react';

const TVMCalculator = () => {
  const [mode, setMode] = useState('end');
  const [presentValue, setPresentValue] = useState('');
  const [payment, setPayment] = useState('');
  const [futureValue, setFutureValue] = useState('');
  const [rate, setRate] = useState('');
  const [period, setPeriod] = useState('');
  const [compounding, setCompounding] = useState('annually');

  const handleModeChange = (value) => {
    setMode(value);
  };

  const handlePresentValueChange = (event) => {
    setPresentValue(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleFutureValueChange = (event) => {
    setFutureValue(event.target.value);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleCompoundingChange = (event) => {
    setCompounding(event.target.value);
  };

  const calculatePresentValue = () => {
    if (payment && rate && period && compounding) {
      const pmt = parseFloat(payment);
      const r = parseFloat(rate) / 100;
      const n = getNumberOfPeriods();
      const pv = pmt * (1 - Math.pow(1 + r, -n)) / r;
      setPresentValue(pv.toFixed(2));
    }
  };

  const calculatePayments = () => {
    if (presentValue && rate && period && compounding) {
      const pv = parseFloat(presentValue);
      const r = parseFloat(rate) / 100;
      const n = getNumberOfPeriods();
      const pmt = pv * r / (1 - Math.pow(1 + r, -n));
      setPayment(pmt.toFixed(2));
    }
  };

  const calculateFutureValue = () => {
    if (presentValue && rate && period && compounding) {
      const pv = parseFloat(presentValue);
      const r = parseFloat(rate) / 100;
      const n = getNumberOfPeriods();
      const fv = pv * Math.pow(1 + r, n);
      setFutureValue(fv.toFixed(2));
    }
  };

  const calculateRate = () => {
    if (presentValue && payment && period && compounding) {
      const pv = parseFloat(presentValue);
      const pmt = parseFloat(payment);
      const n = getNumberOfPeriods();
      let guess = 0.1;
      let rate = guess;
      let factor = 0;
      let epsilon = 0.00001;

      do {
        rate = rate + epsilon;
        let temp = pv;
        for (let i = 0; i < n; i++) {
          temp = temp * (1 + rate);
          temp = temp + pmt;
        }
        factor = temp;
      } while (factor > 0);

      setRate((rate * 100).toFixed(2));
    }
  };

  const calculatePeriod = () => {
    if (presentValue && payment && rate && compounding) {
      const pv = parseFloat(presentValue);
      const pmt = parseFloat(payment);
      const r = parseFloat(rate) / 100;
      let n = 0;
      let factor = 0;
      let epsilon = 0.00001;

      do {
        n = n + epsilon;
        let temp = pv;
        for (let i = 0; i < n; i++) {
          temp = temp * (1 + r);
          temp = temp + pmt;
        }
        factor = temp;
      } while (factor > 0);

      setPeriod(n.toFixed(2));
    }
  };

  const getNumberOfPeriods = () => {
    let numberOfPeriods = parseFloat(period);

    switch (compounding) {
      case 'annually':
        return numberOfPeriods;
      case 'monthly':
        return numberOfPeriods * 12;
      case 'daily':
        return numberOfPeriods * 365;
      case 'semiannually':
        return numberOfPeriods * 2;
      default:
        return numberOfPeriods;
    }
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="md" mb={4}>
        TVM Calculator
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Mode:</FormLabel>
        <RadioGroup value={mode} onChange={handleModeChange}>
          <Radio value="end">End</Radio>
          <Radio value="beginning">Beginning</Radio>
        </RadioGroup>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Present Value:</FormLabel>
        <Input type="number" value={presentValue} onChange={handlePresentValueChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Payment:</FormLabel>
        <Input type="number" value={payment} onChange={handlePaymentChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Future Value:</FormLabel>
        <Input type="number" value={futureValue} onChange={handleFutureValueChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Rate %:</FormLabel>
        <Input type="number" value={rate} onChange={handleRateChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Period:</FormLabel>
        <Input type="number" value={period} onChange={handlePeriodChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Compounding:</FormLabel>
        <Select value={compounding} onChange={handleCompoundingChange}>
          <option value="annually">Annually</option>
          <option value="monthly">Monthly</option>
          <option value="daily">Daily</option>
          <option value="semiannually">Semiannually</option>
        </Select>
      </FormControl>
      <Button colorScheme="blue" onClick={calculatePresentValue} mb={2}>
        Calculate Present Value
      </Button>
      <Button colorScheme="blue" onClick={calculatePayments} mb={2}>
        Calculate Payments
      </Button>
      <Button colorScheme="blue" onClick={calculateFutureValue} mb={2}>
        Calculate Future Value
      </Button>
      <Button colorScheme="blue" onClick={calculateRate} mb={2}>
        Calculate Rate
      </Button>
      <Button colorScheme="blue" onClick={calculatePeriod}>
        Calculate Period
      </Button>
    </Box>
  );
};

export default TVMCalculator;
