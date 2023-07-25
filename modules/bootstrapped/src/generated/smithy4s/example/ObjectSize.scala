package smithy4s.example

import smithy4s.Hints
import smithy4s.Newtype
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.schema.Schema.bijection
import smithy4s.schema.Schema.int

object ObjectSize extends Newtype[Int] {
  val hints: Hints = Hints(
    smithy.api.Box(),
  )
  val underlyingSchema: Schema[Int] = int.withId(ShapeId("smithy4s.example", "ObjectSize")).addHints(hints)
  implicit val schema: Schema[ObjectSize] = bijection(underlyingSchema, asBijection)
}
