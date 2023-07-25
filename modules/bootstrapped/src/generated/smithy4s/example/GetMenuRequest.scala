package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class GetMenuRequest(restaurant: String)
object GetMenuRequest extends ShapeTag.Companion[GetMenuRequest] {
  val hints: Hints = Hints.empty

  val restaurant = string.required[GetMenuRequest]("restaurant", _.restaurant).addHints(smithy.api.HttpLabel(), smithy.api.Required())

  implicit val schema: Schema[GetMenuRequest] = struct(
    restaurant,
  ){
    GetMenuRequest.apply
  }.withId(ShapeId("smithy4s.example", "GetMenuRequest")).addHints(hints)
}
