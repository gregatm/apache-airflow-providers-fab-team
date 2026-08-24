#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

"""add team column to ab_role

Revision ID: 548dc85ee1b5
Revises: 02ca36b0235b
Create Date: 2026-07-31 16:47:32.436387

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '548dc85ee1b5'
down_revision = '02ca36b0235b'
branch_labels = None
depends_on = None
fab_version = None


def upgrade() -> None:

    dialect_name = op.get_context().dialect.name

    if dialect_name == "sqlite":
        op.add_column('ab_role', sa.Column('team_name', sa.String(50), nullable=True))
    else:
        op.add_column('ab_role', sa.Column('team_name', sa.String(50), sa.ForeignKey("team.name"), nullable=True))

def downgrade() -> None:
    op.drop_column('ab_role', 'team_name')
