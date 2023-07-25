package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.constant

final case class Serializable()
object Serializable extends ShapeTag.Companion[Serializable] {
  val hints: Hints = Hints.empty

  implicit val schema: Schema[Serializable] = constant(Serializable()).withId(ShapeId("smithy4s.example", "Serializable")).addHints(hints)
}
