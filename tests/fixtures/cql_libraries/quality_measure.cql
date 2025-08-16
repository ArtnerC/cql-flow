library QualityMeasure version '2.1.0'

using FHIR version '4.0.1'
using QDM version '5.6'

include Common version '1.0.0' called Common

codesystem "LOINC": 'http://loinc.org'
valueset "Diabetes": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.103.12.1001'

parameter MeasurementPeriod Interval<DateTime>
parameter ProductLine String default 'commercial'

context Patient

define InitialPopulation:
  AgeInYearsAt(start of MeasurementPeriod) >= 18
    and exists(DiabetesConditions)

define DiabetesConditions:
  [Condition: "Diabetes"] C
    where C.clinicalStatus in {'active', 'recurrence', 'relapse'}
      and C.verificationStatus in {'confirmed', 'differential'}

define Denominator:
  InitialPopulation

define HasHbA1cTest:
  exists([Observation: "HbA1c Test"] O
    where O.effective during MeasurementPeriod
      and O.value is not null)

define HasBloodPressureControl:
  exists([Observation: "Blood Pressure"] BP
    where BP.effective during MeasurementPeriod
      and BP.component[0].value < 140
      and BP.component[1].value < 90)

define NumeratorConditions:
  HasHbA1cTest and HasBloodPressureControl

define Numerator:
  Denominator and NumeratorConditions

define MeasureObservation:
  if Numerator then 1 else 0

define SDE_Ethnicity:
  Patient.extension E where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'

define SDE_Race:
  Patient.extension E where E.url = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
