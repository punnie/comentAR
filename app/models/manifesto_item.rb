# frozen_string_literal: true

class ManifestoItem < ApplicationRecord
  belongs_to :manifesto_section
  belongs_to :parent, class_name: 'ManifestoItem', foreign_key: :manifesto_item_id, optional: true
end
