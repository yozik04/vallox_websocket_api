from .constants import vlxDevConstants
from .client import Client

from enum import Enum #part of the enum34 package under python2
import logging

class PROFILE(Enum):
    NONE = 0
    HOME = 1
    AWAY = 2
    BOOST = 3
    FIREPLACE = 4
    EXTRA = 5
#TODO Poor mans Enum in case we don't want no dependency on python2: 
#def enum(*sequential, **named):
#    enums = dict(zip(sequential, range(len(sequential))), **named)
#    reverse = dict((value, key) for key, value in enums.iteritems())
#    enums['reverse_mapping'] = reverse
#    return type('Enum', (), enums)

class Vallox(Client):
    def get_profile(self):
        """Returns the profile of the fan

        :returns: One of PROFILE.* values or PROFILE.NONE if unknown
        """
        s = self.fetch_metrics(['A_CYC_STATE','A_CYC_BOOST_TIMER',
                                'A_CYC_FIREPLACE_TIMER','A_CYC_EXTRA_TIMER'])
        
        if s['A_CYC_EXTRA_TIMER'] > 0: return PROFILE.EXTRA
        if s['A_CYC_FIREPLACE_TIMER'] > 0: return PROFILE.FIREPLACE
        if s['A_CYC_BOOST_TIMER'] > 0: return PROFILE.BOOST
        if s['A_CYC_STATE'] == 1: return PROFILE.AWAY
        elif s['A_CYC_STATE'] == 0: return PROFILE.HOME
        return PROFILE.NONE

    
    def set_profile(self, profile, duration=None):
        """Set the profile of the fan

        :params:
          :profile: One of PROFILE.* values
          :duration: timeout in minutes for the FIREPLACE and EXTRA profiles
        """

        #duration: None means default configured setting. 65535 means no time out
        if profile == PROFILE.HOME:
            self.set_values({'A_CYC_STATE': '0','A_CYC_BOOST_TIMER': '0',
                             'A_CYC_FIREPLACE_TIMER': '0',
                             'A_CYC_EXTRA_TIMER': '0'})
        elif profile == PROFILE.AWAY:
            self.set_values({'A_CYC_STATE': '1','A_CYC_BOOST_TIMER': '0',
                             'A_CYC_FIREPLACE_TIMER': '0',
                             'A_CYC_EXTRA_TIMER': '0'})
        elif profile == PROFILE.FIREPLACE:
            if duration is not None:
                dur = str(duration)
            else:
                s = self.fetch_metrics(['A_CYC_FIREPLACE_TIME'])
                dur = str(s['A_CYC_FIREPLACE_TIME'])
            logging.warn("Setting FIREPLACE duration to: %s" % dur)
            self.set_values({'A_CYC_FIREPLACE_TIMER': dur,
                             'A_CYC_EXTRA_TIMER': '0'})
        elif profile == PROFILE.EXTRA:
            if duration is not None:
                dur = str(duration)
            else:
                s = self.fetch_metrics(['A_CYC_EXTRA_TIME'])
                dur = str(s['A_CYC_EXTRA_TIME'])
            logging.warn("Setting EXTRA duration to: %s" % dur)
            self.set_values({'A_CYC_FIREPLACE_TIMER': '0',
                             'A_CYC_EXTRA_TIMER': dur})

