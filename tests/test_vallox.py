import mock
from unittest import TestCase

from vallox_websocket_api import Vallox, PROFILE


class TestValloxSetProfile(TestCase):
  def setUp(self):
    self.client = Vallox('127.0.0.1')

    self.client.set_values = mock.MagicMock()

  def checkSetProfile(self, profile, set_values_dict):
    self.client.set_profile(profile)

    self.client.set_values.assert_called_once_with(set_values_dict)

  def testSetProfileHome(self):
    self.checkSetProfile(PROFILE.HOME, {'A_CYC_STATE': '0',
                                        'A_CYC_BOOST_TIMER': '0',
                                        'A_CYC_FIREPLACE_TIMER': '0',
                                        'A_CYC_EXTRA_TIMER': '0'})

  def testSetProfileAway(self):
    self.checkSetProfile(PROFILE.AWAY, {'A_CYC_STATE': '1',
                                        'A_CYC_BOOST_TIMER': '0',
                                        'A_CYC_FIREPLACE_TIMER': '0',
                                        'A_CYC_EXTRA_TIMER': '0'})

  def testSetProfileBoost(self):
    self.client.fetch_metric = mock.MagicMock(return_value=30)

    self.checkSetProfile(PROFILE.BOOST, {'A_CYC_BOOST_TIMER': '30',
                                         'A_CYC_FIREPLACE_TIMER': '0',
                                         'A_CYC_EXTRA_TIMER': '0'})

    self.client.fetch_metric.assert_called_once_with('A_CYC_BOOST_TIME')

  def testSetProfileFireplace(self):
    self.client.fetch_metric = mock.MagicMock(return_value=30)

    self.checkSetProfile(PROFILE.FIREPLACE, {'A_CYC_BOOST_TIMER': '0',
                                             'A_CYC_FIREPLACE_TIMER': '30',
                                             'A_CYC_EXTRA_TIMER': '0'})

    self.client.fetch_metric.assert_called_once_with('A_CYC_FIREPLACE_TIME')

  def testSetProfileExtra(self):
    self.client.fetch_metric = mock.MagicMock(return_value=30)

    self.checkSetProfile(PROFILE.EXTRA, {'A_CYC_BOOST_TIMER': '0',
                                             'A_CYC_FIREPLACE_TIMER': '0',
                                             'A_CYC_EXTRA_TIMER': '30'})

    self.client.fetch_metric.assert_called_once_with('A_CYC_EXTRA_TIME')

class TestValloxGetProfile(TestCase):
  def setUp(self):
    self.client = Vallox('127.0.0.1')

  def checkGetProfile(self, fetch_metrics_result, expected_profile):
    self.client.fetch_metrics = mock.MagicMock(return_value=fetch_metrics_result)

    self.assertEqual(self.client.get_profile(), expected_profile)

    self.client.fetch_metrics.assert_called_once_with(['A_CYC_STATE', 'A_CYC_BOOST_TIMER',
                                                       'A_CYC_FIREPLACE_TIMER', 'A_CYC_EXTRA_TIMER'])

  def testGetProfileHome(self):
    self.checkGetProfile({
      'A_CYC_STATE': 0,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.HOME)

  def testGetProfileAway(self):
    self.checkGetProfile({
      'A_CYC_STATE': 1,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.AWAY)

  def testGetProfileBoost(self):
    self.checkGetProfile({
      'A_CYC_STATE': 0,
      'A_CYC_BOOST_TIMER': 30,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.BOOST)

    self.checkGetProfile({
      'A_CYC_STATE': 1,
      'A_CYC_BOOST_TIMER': 30,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.BOOST)

  def testGetProfileFireplace(self):
    self.checkGetProfile({
      'A_CYC_STATE': 0,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 30,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.FIREPLACE)

    self.checkGetProfile({
      'A_CYC_STATE': 1,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 30,
      'A_CYC_EXTRA_TIMER': 0
    }, PROFILE.FIREPLACE)

  def testGetProfileExtra(self):
    self.checkGetProfile({
      'A_CYC_STATE': 0,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 30
    }, PROFILE.EXTRA)

    self.checkGetProfile({
      'A_CYC_STATE': 1,
      'A_CYC_BOOST_TIMER': 0,
      'A_CYC_FIREPLACE_TIMER': 0,
      'A_CYC_EXTRA_TIMER': 30
    }, PROFILE.EXTRA)