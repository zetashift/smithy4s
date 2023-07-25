package smithy4s.example

import smithy4s.Hints
import smithy4s.Newtype
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.schema.Schema.bijection
import smithy4s.schema.Schema.string

@deprecated(message = "N/A", since = "N/A")
object DeprecatedString extends Newtype[String] {
  val hints: Hints = Hints(
    smithy.api.Deprecated(message = None, since = None),
  )
  val underlyingSchema: Schema[String] = string.withId(ShapeId("smithy4s.example", "DeprecatedString")).addHints(hints)
  implicit val schema: Schema[DeprecatedString] = bijection(underlyingSchema, asBijection)
}
