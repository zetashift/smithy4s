package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class ReservationInput(name: String, town: Option[String] = None)
object ReservationInput extends ShapeTag.Companion[ReservationInput] {
  val hints: Hints = Hints(
    smithy.api.Input(),
  )

  val name = string.required[ReservationInput]("name", _.name).addHints(smithy.api.HttpLabel(), smithy.api.Required())
  val town = string.optional[ReservationInput]("town", _.town).addHints(smithy.api.HttpQuery("town"))

  implicit val schema: Schema[ReservationInput] = struct(
    name,
    town,
  ){
    ReservationInput.apply
  }.withId(ShapeId("smithy4s.example", "ReservationInput")).addHints(hints)
}
