import { connect } from 'react-redux';
import { selectArchetype } from '../basicInfo';
import { updateArchetype } from '../basicInfo';
import { RootState } from '../store';
import Archetype from '../components/Archetype';

const mapStateToProps = (state: RootState) => ({
  archetype: selectArchetype(state),
});

const mapDispatchToProps = {
  updateArchetype,
};

export default connect(mapStateToProps, mapDispatchToProps)(Archetype);
