import { z } from "zod";
import {
  NoteContentSchema,
  ArticleContentSchema,
  EventContentSchema,
  MeetContentSchema,
  ReviewContentSchema,
  GigContentSchema,
  AskLocalsContentSchema,
  AdContentSchema,
} from "~/schemas/post";
import type { PostType } from "~/schemas/post";

export function validateContent(type: PostType, content: unknown) {
  const schema = {
    note: NoteContentSchema,
    article: ArticleContentSchema,
    event: EventContentSchema,
    meet: MeetContentSchema,
    review: ReviewContentSchema,
    gig: GigContentSchema,
    ask_locals: AskLocalsContentSchema,
    ad: AdContentSchema,
  }[type];

  return schema.safeParse(content);
}
