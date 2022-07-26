"""empty message

Revision ID: b7fdfcb11420
Revises: a22ee9194d9d
Create Date: 2022-07-19 09:23:59.309146

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b7fdfcb11420'
down_revision = 'a22ee9194d9d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('customers', sa.Column('sysadmins', sa.String(length=30), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('customers', 'sysadmins')
    # ### end Alembic commands ###
