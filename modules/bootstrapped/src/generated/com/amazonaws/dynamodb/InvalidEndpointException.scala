package com.amazonaws.dynamodb

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class InvalidEndpointException(message: Option[String] = None) extends Throwable {
  override def getMessage(): String = message.orNull
}
object InvalidEndpointException extends ShapeTag.Companion[InvalidEndpointException] {
  val hints: Hints = Hints(
    smithy.api.Error.CLIENT.widen,
    smithy.api.HttpError(421),
  )

  val message = string.optional[InvalidEndpointException]("Message", _.message)

  implicit val schema: Schema[InvalidEndpointException] = struct(
    message,
  ){
    InvalidEndpointException.apply
  }.withId(ShapeId("com.amazonaws.dynamodb", "InvalidEndpointException")).addHints(hints)
}
