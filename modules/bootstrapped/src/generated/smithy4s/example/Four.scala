package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.int
import smithy4s.schema.Schema.struct

final case class Four(four: Int)
object Four extends ShapeTag.Companion[Four] {
  val hints: Hints = Hints.empty

  val four = int.required[Four]("four", _.four).addHints(smithy.api.Required())

  implicit val schema: Schema[Four] = struct(
    four,
  ){
    Four.apply
  }.withId(ShapeId("smithy4s.example", "Four")).addHints(hints)
}
