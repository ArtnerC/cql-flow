library MultiAdvanced version '1.0.0'

using Simple

context Patient

define Complex:
  from Patient p, Encounter e
  let a: 1, b: 2, c: 3
  with Observation o such that o.subject = p.id
  without Condition cnd such that cnd.subject = p.id
  aggregate total starting 0: total + c
  sort by p.id asc, e.id desc
