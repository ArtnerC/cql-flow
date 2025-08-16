library SimpleLibrary version '1.0.0'

using FHIR version '4.0.1'

parameter MeasurementPeriod Interval<DateTime>

define AgeInYears:
  AgeInYearsAt(start of MeasurementPeriod)

define IsAdult:
  AgeInYears >= 18

define InitialPopulation:
  IsAdult and exists([Patient] P)
