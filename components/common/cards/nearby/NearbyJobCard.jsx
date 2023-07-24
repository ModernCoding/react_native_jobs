import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={ styles.logoContainer }
      >
        <Image
          source={{ uri: checkImageURL (job.employer_logo) }}
          resizeMode='contain'
          style={ styles.logoImage }
        />
      </TouchableOpacity>

      <View style={ styles.infoContainer }>
        <Text
          style={ styles.jobName }
          numberOfLines={ 1 }
        >
          { job.job_title }
        </Text>

        <Text style={ styles.location }>
          { job.job_country }
        </Text>

      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard