library SemanticErrors version '1.0.0'

using FHIR version '4.0.1'

parameter MeasurementPeriod Interval<DateTime>

// Circular dependency
define A: B + 1
define B: A - 1

// Undefined function
define UndefinedFunction:
  NonExistentFunction(42)

// Invalid type conversion
define InvalidConversion:
  ToString(MeasurementPeriod)

// Duplicate parameter names
parameter DuplicateName String
parameter DuplicateName Integer
