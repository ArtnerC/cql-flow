library InvalidSyntax version '1.0.0'

using FHIR version '4.0.1'

// Missing parameter type specifier
parameter MeasurementPeriod

// Invalid expression syntax
define BadExpression:
  [Patient] P where P.birthDate == 'invalid-date' and

// Undefined reference
define UndefinedRef:
  SomeUndefinedSymbol

// Type mismatch
define TypeMismatch:
  AgeInYears(42) // Should be DateTime, not Integer
